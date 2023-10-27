import React from "react";
import Card from "../card/card";

import "./CardContainer.css";

const CardContainer = ({ users }) => {
  console.log("card container", users);
  return (
    <div className="card-container">
      <div className="card-wrapper">
        {users.map((user, index) => (
          <Card key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
