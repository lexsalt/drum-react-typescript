import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState<Boolean>(true)
  const [statusColor, setStatusColor] = useState<string>("green")
  const [currentSound, setCurrentSound] = useState<string>("")
  const switchOn = () => {
    console.log(status)
    if (status === true) {
      setStatus(false)
      setStatusColor("red")
      setCurrentSound("")
    } else if (status !== true) {
      setStatus(true)
      setStatusColor("green")
      setCurrentSound("")
    }
    console.log(status)
  }
  const pressedQ = () => {
    if (status === false) {
      console.log("off")
    } else if (status === true) {
      console.log(status)
      let soundQ = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
      soundQ.play()
      setCurrentSound("Heater-1")
    }
  }
  const pressedW = () => {
    if (status === true) {
      let soundW = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
      soundW.play();
      setCurrentSound("Heater-2");
    } else if (status === false) {
      console.log("off")
    }
  }
  const pressedE = () => {
    if (status === true) {
      let soundE = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3");
      soundE.play();
      setCurrentSound("Heater-3");
    } else if (status === false) {
      console.log("off")
    }
  }
  const pressedA = () => {
    if (status === true) {
      let soundA = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
      soundA.play();
      setCurrentSound("Heater-4");
    } else if (status === false) {
      console.log("off")
    }
  }
  const pressedS = () => {
    if (status === true) {
      let soundS = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
      soundS.play();
      setCurrentSound("Clap");
    } else if (status === false) {
      console.log("off")
    }
  }
  const pressedD = () => {
    if (status === true) {
      let soundD = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
      soundD.play();
      setCurrentSound("Open-HH");
    } else if (status === false) {
      console.log("off")
    }
  }
  const pressedZ = () => {
    if (status === true) {
      let soundZ = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
      soundZ.play();
      setCurrentSound("Kick-n'-Hat");
    } else if (status === false) {
      console.log("off")
    }
  }
  const pressedX = () => {
    if (status === true) {
      let soundX = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
      soundX.play();
      setCurrentSound("Kick");
    } else if (status === false) {
      console.log("off")
    }
  }
  const pressedC = () => {
    if (status === true) {
      let soundC = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");
      soundC.play();
      setCurrentSound("Closed-HH");
    } else if (status === false) {
      console.log("off")
    }
  }
  const handleKeyDown = (event: KeyboardEvent): void => {
    if (status !== true) {
      console.log("off")
    } else if (status === true) {
      switch (event.code) {
        case "KeyQ":
          pressedQ()
          break;
        case "KeyW":
          pressedW()
          break;
        case "KeyE":
          pressedE()
          break;
        case "KeyA":
          pressedA()
          break;
        case "KeyS":
          pressedS()
          break;
        case "KeyD":
          pressedD()
          break;
        case "KeyZ":
          pressedZ()
          break;
        case "KeyX":
          pressedX()
          break;
        case "KeyC":
          pressedC()
          break;
        default:
        // do nothing
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line
  }, []);
  // console.log(`status:${status}`)
  return (
    <div className="App">
      <div id="bg">
        <div className="inner-container" id="drum-machine">
          <div className="pad-bank">
            <div>
              <button className="drum-pad" id="Heater-1" onClick={pressedQ}><audio className="clip" id="Q" /*useRef(Qref)*/ src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>Q</button>
            </div>
            <div>
              <button className="drum-pad" id="Heater-2" onClick={pressedW}
              ><audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>W</button>
            </div>
            <div>
              <button className="drum-pad" id="Heater-3" onClick={pressedE}><audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>E</button>
            </div>
            <div>
              <button className="drum-pad" id="Heater-4" onClick={pressedA}><audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>A</button>
            </div>
            <div>
              <button className="drum-pad" id="Clap" onClick={pressedS}><audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>S</button>
            </div>
            <div>
              <button className="drum-pad" id="Open-HH" onClick={pressedD}><audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>D</button>
            </div>
            <div>
              <button className="drum-pad" id="Kick-n'-Hat" onClick={pressedZ}><audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>Z</button>
            </div>
            <div>
              <button className="drum-pad" id="Kick" onClick={pressedX}><audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>X</button>
            </div>
            <div>
              <button className="drum-pad" id="Closed-HH" onClick={pressedC}><audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>C</button>
            </div>
          </div>
          <div className="controls-container">
            {/* <p>{status ? "True" : "False"}</p> */}
            <p id="power">Power</p>
            <button id="powerButton" onClick={switchOn} style={{ background: statusColor }}><p>{status ? "On" : "Off"}</p></button>
            <p id="power">Sound:</p>
            <div id="display"><p>{currentSound}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
