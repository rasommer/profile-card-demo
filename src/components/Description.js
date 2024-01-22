import React from "react";

function Description(props) {
  const { name, description } = props.text;
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Description;
