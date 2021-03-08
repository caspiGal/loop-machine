/*
Dropdown Component
*/
import React from "react";
import "./Dropdown.css";

const Dropdown = (props) => {
  const dropDown = () => {
    document.getElementById("dropDown").classList.toggle("show");
  };
  const sounds = [
    "Funki-Beats",
    "Break-Beats",
    "Funki-Groove",
    "Electric-Guitar",
    "Stompy",
    "Tanggu",
    "Perc",
    "Billie-Jean",
    "Organ-Synth",
  ];
  return (
    <div className="dropdown">
      <button onClick={dropDown} className="dropbtn">
        <h2> Looper </h2>
      </button>
      <div id="dropDown" className="dropdown-content">
        {sounds.map((beat, i) => (
          /*mapping the sounds array to get the sounds[i] and present it to the screen `sound${i} is from the css`*/
          <div className={`sound${i}`} key={i}>
            <p>{beat}</p>
            <label className="switch">
              <input
                type="checkbox"
                onClick={() => props.onSoundClick(sounds[i])}
              />
              <span className="slider round"></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Dropdown;
