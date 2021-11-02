import React from "react";
import { useSpring, animated } from "react-spring";

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="a-card-info" style={style}>
      <p className="a-card-title">{props.title}</p>
      <p className="a-card-sub-title">{props.subTitle}</p>
      <p className="a-card-sub-title">{props.subInfo}</p>
      <a
        className="a-link"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.link}
      </a>
    </animated.div>
  );
}

export default CardInfo;
