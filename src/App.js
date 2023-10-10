import React from "react";
import WavesBG from "./assets/bg-waves.svg";
import DrumPad from "./components/DrumPad";

function App() {
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
        <div
          className="container-fluid rounded-3 p-4 col-12 col-lg-6 bg-glass border rounded-3 border-white border-opacity-25"
          id="drum-machine"
        >
          <div className="row gy-4 ">
            <div className="col-12 col-lg-6 col-sm-12">
              <div className="row row-cols-3 g-3">
                <DrumPad />
                <DrumPad />
                <DrumPad />
                <DrumPad />
                <DrumPad />
                <DrumPad />
                <DrumPad />
                <DrumPad />
                <DrumPad />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-6">
              <div className="d-flex flex-column align-items-center h-100 container-fluid justify-content-center">
                <div
                  id="display"
                  className="py-2 bg-glass-display container-fluid d-flex flex-column justify-content-center align-items-center fs-4 text-white text-opacity-75 border rounded-3 border-white border-opacity-25"
                >
                  Display
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
