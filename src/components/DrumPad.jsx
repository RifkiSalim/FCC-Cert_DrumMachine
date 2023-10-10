import React, { useRef, useState } from "react";
const DrumPad = ({ id, audioSrc, triggerKey, onPlay, onDone }) => {
  const [isActive, setIsActive] = useState(false);
  const audioRef = useRef(null);
  const handleClick = () => {
    if (audioRef.current) {
      onPlay();
      setIsActive(true);
      // Pause the audio if it's currently playing
      audioRef.current.pause();
      // Set the currentTime to 0 to reset the audio to the beginning
      audioRef.current.currentTime = 0;
      // Then play the audio
      audioRef.current
        .play()
        .then(() => {})
        .catch((error) => {
          // Handle any errors
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        })
        .finally(() => {
          onDone();
          const timeoutId = setTimeout(() => {
            setIsActive(false);
          }, 500);
          return () => clearTimeout(timeoutId);
        });
    }
  };

  return (
    <div className="col">
      <button
        id={id}
        className={`drum-pad container-fluid btn btn-square-md d-flex flex-column align-items-center justify-content-center ${
          isActive ? "btn-secondary" : "btn-primary"
        } `}
        style={{
          height: 100,
        }}
        onClick={handleClick}
      >
        <audio
          ref={audioRef}
          className="clip"
          id={triggerKey}
          src={audioSrc}
        ></audio>
        <span>{triggerKey}</span>
      </button>
    </div>
  );
};

export default DrumPad;
