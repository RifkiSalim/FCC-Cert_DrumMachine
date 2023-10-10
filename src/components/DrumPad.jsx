import React from "react";

export default function DrumPad() {
  return (
    <div className="col drum-pad">
      <div
        className="container-fluid btn btn-primary btn-square-md bg-primary d-flex flex-column align-items-center justify-content-center"
        style={{
          height: 100,
        }}
      >
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
        <span>Q</span>
      </div>
    </div>
  );
}
