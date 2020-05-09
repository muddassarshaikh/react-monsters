import React from "react";

// Import styles
import "./card-list.styles.css";

// Import Components
import { Card } from "../card/card.component";

export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
