/**
 * Record Component
 */
import React, { useState } from "react";
import ReactRecord from "react-record";
import { Button } from "react-bootstrap";
import { RiRecordCircleLine } from "react-icons/ri";

const Record = () => {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    setIsRecording(true);
  };
  const stopRecording = () => {
    setIsRecording(false);
  };
  return (
    <div>
      <ReactRecord record={isRecording} onStop={stopRecording}>
        <Button className="mx-3" variant={"success"} onClick={startRecording}>
          Record
        </Button>
        <Button className="mx-3" variant={"danger"} onClick={stopRecording}>
          Stop
        </Button>
        <span>
          {""}
          {isRecording ? <RiRecordCircleLine size={25} /> : null}
        </span>
      </ReactRecord>
    </div>
  );
};

export default Record;
