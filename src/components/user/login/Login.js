import React from "react";

import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <div>
          <input type="text" id="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <button type="button">Login</button>
      </form>
    </div>
  );
};

export default Login;
