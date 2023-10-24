import React from "react";

import Login from "../login/Login";
import Register from "../register/register";

import "./UserContainer.css";

const UserContainer = () => {
  return (
    <div className="user-container">
      <Register />
      <Login />
    </div>
  );
};

export default UserContainer;
