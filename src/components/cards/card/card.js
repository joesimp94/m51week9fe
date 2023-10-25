import React from "react";

import "./Card.css";

const Card = ({ users }) => {
  return (
    <div className="card">
      <p>{users}</p>
    </div>
  );
};

export default Card;
