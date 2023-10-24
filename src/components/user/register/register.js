import React from "react";

import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <h2>Register</h2>
      <form>
        <div>
          <input type="text" id="username" placeholder="Username" />
        </div>
        <div>
          <input type="email" id="password" placeholder="Email" />
        </div>
        <div>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <button type="button">Register</button>
      </form>
    </div>
  );
};

export default Register;
