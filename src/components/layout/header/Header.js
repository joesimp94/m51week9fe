import React from "react";

import "./Header.css";

const Header = ({ user }) => {
  if (user.token === null) {
    return <h1>You're not logged in.</h1>;
  }
  return (
    <div className="header">
      You are logged in to this website, {user.username}.
    </div>
  );
};

export default Header;
