import React from "react";
import { useState } from "react";

import "./Register.css";

import { registerUser } from "../../../utils";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = await registerUser(username, email, password);
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form className="reg-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="reg-username"
            placeholder="Username"
            onChange={(e) => handleChange(e, setUsername)}
          />
        </div>
        <div>
          <input
            type="email"
            id="reg-email"
            placeholder="Email"
            onChange={(e) => handleChange(e, setEmail)}
          />
        </div>
        <div>
          <input
            type="password"
            id="reg-password"
            placeholder="Password"
            onChange={(e) => handleChange(e, setPassword)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
