import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "./../services/authService";
import { Redirect } from "react-router-dom";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      //we need JWT to be stored in browser's localstorage.
      // localStorage.setItem("token", jwt); (moved to auth service as part of refactoring)
      //now redirect the user.
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
      //This will reload the application.
      //lecture 21: line 27 is edited in order to redirect to user on the page where he was before logging in.
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
