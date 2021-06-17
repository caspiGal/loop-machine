/*
Play-Pause buttons Component
*/
import React from "react";
import "./PlayPause.css";
import play from "../../assets/play.png";
import pause from "../../assets/pause.png";

const PlayPause = (props) => {
  const { onClick } = props;
  return (
    <div className="btn-wrapper">
      <img
        className="wobble-hor-bottom"
        id="playbtn"
        src={play}
        alt="playbtn"
        onClick={onClick}
      />
      <img
        className="wobble-hor-bottom"
        id="pausebtn"
        src={pause}
        alt="pausebtn"
        onClick={onClick}
      />
    </div>
  );
};
export default PlayPause;
