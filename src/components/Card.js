import React from "react";
import Photo from "./Photo";
import Description from "./Description";
import Skill from "./Skill";
import profile from "../img/profile.jpg";
import description from "../resources/description.json";
import skills from "../resources/skills.json";

function Card() {
  return (
    <div className="card">
      <Photo img={profile} />
      <Description text={description} />
      <Skill skills={skills.list} />
    </div>
  );
}

export default Card;
