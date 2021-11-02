import React from "react";

import CardInfo from "../components/CardInfo";

function Card(props) {
  return (
    <div className="a-card" onClick={(e) => props.click(props.item)}>
      <img
        className="a-card-image"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          subInfo={props.item.subInfo}
          link={props.item.link}
        />
      )}
    </div>
  );
}

export default Card;
