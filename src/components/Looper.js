import React, { useState } from "react";
import "./Looper.css";
import Dropdown from "./Dropdown/Dropdown";
import PlayPause from "./PlayPause/PlayPause";

const Looper = () => {
  //toggle is On or Off ...
  const [toggle, setToggle] = useState([]);
  //app is playing or not ...
  const [playing, setPlaying] = useState(false);

  function getIndex(value, arr, prop) {
    // getIndex from obj
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
    return -1; //to handle the case where the value doesn't exist
  }

  const handleDropdownClick = (beatName) => {
    const audioObj = {
      name: beatName,
      audio: new Audio(`songs/${beatName}.mp3`),
    };
    //infinite loop of the beat
    audioObj.audio.setAttribute("loop", "true");

    let array = [...toggle];
    const index = getIndex(beatName, array, "name");

    //if i found
    if (index !== -1) {
      if (playing === true) {
        array[index].audio.pause();
      }
      console.log(beatName + " is set to Off");
      array.splice(index, 1); //  removing or replacing existing elements
      setToggle(array);
    } else {
      // index is -1
      console.log(beatName + " is set to On");
      array.push(audioObj);
      setToggle(array);
      if (playing) {
        audioObj.audio.play();
      }
    }
    console.log(array);
  };

  const handlePlayPauseClick = (e) => {
    e.preventDefault();
    const clicked = e.target.alt;
    let playing = [...toggle];

    for (let i = 0; i < playing.length; i++) {
      if (clicked === "playbtn") {
        if (playing === true) return;
        setPlaying(true);
        playing[i].audio.play();
      } else {
        // clicked == 'pausebtn'
        if (playing === false) return;
        setPlaying(false);
        playing[i].audio.pause();
      }
    }
  };

  return (
    <div>
      <Dropdown onSoundClick={handleDropdownClick} />
      <PlayPause onClick={handlePlayPauseClick} />
    </div>
  );
};
export default Looper;
