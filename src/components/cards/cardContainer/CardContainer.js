import React from "react";
import Card from "../card/card";

import "./CardContainer.css";

const CardContainer = () => {
  const fakeUsers = ["bill", "fred", "sarah", "bob", "alice"];
  return (
    <div className="card-container">
      {fakeUsers.map((user, index) => (
        <Card user={user} />
      ))}
    </div>
  );
};

export default CardContainer;
