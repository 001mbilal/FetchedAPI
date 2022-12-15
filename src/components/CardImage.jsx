import React from "react";
import "./CardImage.css";

const CardImage = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.Images} alt="pic" height={150} width={300} />
          <h3 className="card_title">{props.name}</h3>
        </div>
      </div>
    </>
  );
};
export default CardImage;
