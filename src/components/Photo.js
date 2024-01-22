import React from "react";

function Photo(props) {
  const { img } = props;
  return (
    <>
      <img src={img} alt="profile" className="photo" />
    </>
  );
}

export default Photo;
