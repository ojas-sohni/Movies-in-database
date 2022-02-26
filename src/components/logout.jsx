import { Component } from "react";
import auth from "../services/authService";

class Logout extends Component {
  componentDidMount() {
    //localStorage.removeItem("token"); (Moved to authservice as part of refactoring.)
    auth.logout();
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
