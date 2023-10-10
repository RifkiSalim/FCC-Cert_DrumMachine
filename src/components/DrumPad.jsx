// React Imports
import React, { useRef, useState } from "react";

// DrumPad Component
const DrumPad = ({ id, audioSrc, triggerKey, onPlay, onDone }) => {
  // States
  const [isActive, setIsActive] = useState(false);

  // Refs
  const audioRef = useRef(null);

  // Handlers
  const handleClick = () => {
    if (audioRef.current) {
      // call onPlay event
      onPlay();
      setIsActive(true);
      // Pause the audio if it's currently playing
      audioRef.current.pause();
      // Reset audio time to the beginning
      audioRef.current.currentTime = 0;
      // Then play the audio
      audioRef.current
        .play()
        .then(() => {})
        .catch((error) => {
          // Pause and reset on error
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        })
        .finally(() => {
          // Call onDone
          onDone();
          // isActive back to false after .5s delay
          const timeoutId = setTimeout(() => {
            setIsActive(false);
          }, 500);
          return () => clearTimeout(timeoutId);
        });
    }
  };

  return (
    <div className="col">
      {/* DrumPad clickable button  */}
      <button
        id={id}
        className={`drum-pad container-fluid btn btn-square-md d-flex flex-column align-items-center justify-content-center ${
          isActive ? "btn-secondary" : "btn-primary"
        } `}
        style={{
          height: 100, // 100px height
        }}
        onClick={handleClick}
      >
        {/* Audio src */}
        <audio
          ref={audioRef}
          className="clip"
          id={triggerKey}
          src={audioSrc}
        ></audio>
        {/* Label */}
        <span>{triggerKey}</span>
      </button>
    </div>
  );
};

export default DrumPad;
