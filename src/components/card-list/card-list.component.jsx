import React from 'react';

// Import Styles
import './card-list.styles.css';

//Import components
import { Card } from '../card/card.component';

export const CardList = (props) => (
  <div class="card-list">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
