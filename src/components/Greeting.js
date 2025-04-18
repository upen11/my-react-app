import React from "react";
import "./Greeting.css";

function Greeting({ person, onToggle, onDelete }) {
  return (
    <div className="greeting-row">
      <h2
        onClick={onToggle}
        className={person.completed ? "strike-through" : ""}
        style={{ cursor: "pointer" }}
      >
        Hey, {person.name}! 👋
      </h2>
      <button onClick={onDelete}>❌</button>
    </div>
  );
}

export default Greeting;
