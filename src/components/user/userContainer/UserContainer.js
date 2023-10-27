import React from "react";

import Login from "../login/Login";
import Register from "../register/register";
import UserPanel from "../userPanel/UserPanel";

import "./UserContainer.css";

const UserContainer = ({ user, setUser, setUsers }) => {
  return (
    <div className="user-container">
      <Register />
      <Login user={user} setUser={setUser} />
      <UserPanel setUsers={setUsers} />
    </div>
  );
};

export default UserContainer;
