import React from "react";
import "./style.scss";

const Input = ({ type, value, error, handleChange, required, placeholder }) => {
  console.log(error);
  return (
    <div className="input-wrapper">
      {error.path === type && (
        <div className="error-label">{error.message}</div>
      )}
      <input
        className="form-input"
        placeholder={placeholder}
        required={required}
        type={type}
        name={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
