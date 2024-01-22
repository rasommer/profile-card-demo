import React from "react";

function Skill(props) {
  console.log(props);
  const { skills } = props;
  return (
    <div className="skill">
      {skills.map((skill) => (
        <span className="skill-token">{skill}</span>
      ))}
    </div>
  );
}

export default Skill;
