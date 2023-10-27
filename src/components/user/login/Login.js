import React from "react";
import { useState } from "react";

import "./Login.css";

import { loginUser } from "../../../utils";

const Login = ({ user, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loggedUser = await loginUser(username, password);
    console.log(loggedUser);
    await setUser(loggedUser);
    console.log(user);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form className="log-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="log-username"
            placeholder="Username"
            onChange={(e) => handleChange(e, setUsername)}
          />
        </div>
        <div>
          <input
            type="password"
            id="log-password"
            placeholder="Password"
            onChange={(e) => handleChange(e, setPassword)}
          />
        </div>
        <button type="sumbit">Login</button>
      </form>
    </div>
  );
};
export default Login;
