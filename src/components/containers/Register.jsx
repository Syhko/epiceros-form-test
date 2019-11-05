import React from "react";
import "./style.scss";
import Input from "../Input";

const Register = () => {
  const [infos, setInfos] = React.useState({});
  const [error, setError] = React.useState({ path: null, message: null });

  const handleInfos = e => {
    setError({ path: null, message: null });
    if (e.target.name === "agree") {
      setInfos({
        ...infos,
        [e.target.name]: e.target.checked
      });
    } else {
      setInfos({
        ...infos,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = e => {
    if (infos.password.length < 6) {
      const error = {
        path: "password",
        message: "password should be 6 characters minimum"
      };
      setError(error);
      e.preventDefault();
      return false;
    }

    e.preventDefault();
    alert("Form successfully sent !");
    setInfos({
      name: "",
      email: "",
      password: "",
      address: "",
      postal_code: "",
      country: "",
      agree: false
    });
  };

  return (
    <div className="register-container">
      <h1 className="form-title">Create a new account</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-inputs">
          <div className="form-column">
            <Input
              error={error}
              placeholder={"Name"}
              required
              type={"name"}
              name={"name"}
              handleChange={handleInfos}
              value={infos.name}
            />
            <Input
              error={error}
              placeholder={"Email"}
              required
              type={"email"}
              name={"email"}
              handleChange={handleInfos}
              value={infos.email}
            />
            <Input
              error={error}
              placeholder={"Password"}
              required
              type={"password"}
              name={"password"}
              handleChange={handleInfos}
              value={infos.password}
            />
          </div>
          <div className="form-column">
            <Input
              error={error}
              placeholder={"Address"}
              required
              type={"address"}
              name={"address"}
              handleChange={handleInfos}
              value={infos.address}
            />
            <Input
              error={error}
              placeholder={"Postal Code"}
              required
              type={"postal_code"}
              name={"postal_code"}
              handleChange={handleInfos}
              value={infos.postal_code}
            />
            <Input
              error={error}
              placeholder={"Country"}
              required
              type={"country"}
              name={"country"}
              handleChange={handleInfos}
              value={infos.country}
            />
          </div>
        </div>
        <label className="checkbox-wrapper">
          <input
            type="checkbox"
            name="agree"
            required
            onChange={handleInfos}
            checked={infos.agree}
          />
          <span>I agree to bring some croissants</span>
        </label>
        <button className="submit-button" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
