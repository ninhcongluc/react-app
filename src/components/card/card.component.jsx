import React from "react";
import './card.styles.css'

export default function Card(props) {
  console.log(props);
  return (
    <div className="card-container">
      <img
        alt="img"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
      <p>{props.monster.phone}</p>
    </div>
  );
}
