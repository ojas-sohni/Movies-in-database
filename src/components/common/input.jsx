import React from "react";

//...rest opertator will help us getting code easy, If we add new parameters we don not have to come back here and add them.
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-froup">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
