// React Imports
import React from "react";
import { useEffect, useState } from "react";

// Custom Components
import DrumPad from "./components/DrumPad";
import Display from "./components/Display";

// Background Imgae
import WavesBG from "./assets/bg-waves.svg";

/*
 ---- Soundbanks ----
  1. Default Soundbank provided by FreeCodeCamp
*/

// Keys Q, W, E, A, S, D, Z, X, C
// Codes 81, 87, 69, 65, 83, 68, 90, 88, 67
const soundbank = [
  {
    name: "Heater 1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    key: "Q",
    code: 81,
  },
  {
    name: "Heater 2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    key: "W",
    code: 87,
  },
  {
    name: "Heater 3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    key: "E",
    code: 69,
  },
  {
    name: "Heater 4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    key: "A",
    code: 65,
  },
  {
    name: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    key: "S",
    code: 83,
  },
  {
    name: "Open HiHat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    key: "D",
    code: 68,
  },
  {
    name: "Kick-n'-Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    key: "Z",
    code: 90,
  },
  {
    name: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    key: "X",
    code: 88,
  },
  {
    name: "Closed HiHat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    key: "C",
    code: 67,
  },
];

const App = () => {
  const [displayText, setDisplayText] = useState("");

  const handleKeyDown = (e) => {
    const pad = soundbank.find((pad) => pad.code === e.keyCode);
    if (!pad) return;
    const el = document.getElementById(pad.key);
    el.click();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  const handleDrumPadPlay = (index) => {
    const pad = soundbank[index];
    setDisplayText(pad.name);
  };

  return (
    <div
      className="container-fluid"
      style={{
        height: "100vh",
        backgroundImage: `url(${WavesBG})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container-fluid d-flex h-100 flex-column w-100 align-items-center justify-content-center p-0">
        {/* Drum Machine Container */}
        <div
          className="container-fluid rounded-3 p-4 col-12 col-lg-6 bg-glass shadow-lg border rounded-3 border-white border-opacity-25"
          id="drum-machine"
        >
          <div className="row gy-4 ">
            {/* DrumPad Column */}
            <div className="col-12 col-lg-6 col-sm-12">
              <div className="row row-cols-3 g-3">
                {soundbank.map((value, index) => {
                  return (
                    <DrumPad
                      key={index}
                      id={value.name}
                      audioSrc={value.src}
                      triggerKey={value.key}
                      onPlay={() => handleDrumPadPlay(index)}
                      onDone={() => setDisplayText("")}
                    />
                  );
                })}
              </div>
            </div>
            {/* Display Column */}
            <div className="col-12 col-sm-12 col-lg-6">
              <div className="d-flex flex-column align-items-center h-100 container-fluid justify-content-center">
                <Display text={displayText} />
              </div>
            </div>
          </div>
        </div>
        {/* Copyright Text */}
        <span className="text-center text-white text-opacity-75 my-2">
          Design and Code by{" "}
          <a
            href="https://rifkisalim.com"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            Rifki Salim
          </a>
          .
        </span>
      </div>
    </div>
  );
};

export default App;
