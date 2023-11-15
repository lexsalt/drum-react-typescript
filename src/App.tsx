import React, { useState } from 'react'; //import React, { useState, useEffect } from 'react'; 
//import logo from './logo.svg';
import './App.css';
/*
className App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        status: "On",
      statusColor: 'green',
      currentSound: ""
    };
    
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.switchOnOff = this.switchOnOff.bind(this);  
    this.pressedQ = this.pressedQ.bind(this);
        this.pressedW = this.pressedW.bind(this);
        this.pressedE = this.pressedE.bind(this);
        this.pressedA = this.pressedA.bind(this);
        this.pressedS = this.pressedS.bind(this);
        this.pressedD = this.pressedD.bind(this);
        this.pressedZ = this.pressedZ.bind(this);
        this.pressedX = this.pressedX.bind(this);
        this.pressedC = this.pressedC.bind(this);
  }
  // Change code below this line
  componentDidMount(event) {
    document.addEventListener("keydown", this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }
  // Change code above this line
  handleKeyPress(event) {
    if (event.keyCode === 81) {
        this.pressedQ();
    }
    else if (event.keyCode === 87) {
        this.pressedW();
    }
    else if (event.keyCode === 69) {
        this.pressedE();
    }
    else if (event.keyCode === 65) {
        this.pressedA();
    }
    else if (event.keyCode === 83) {
        this.pressedS();
    }
    else if (event.keyCode === 68) {
        this.pressedD();
    }
    else if (event.keyCode === 90) {
        this.pressedZ();
    }
    else if (event.keyCode === 88) {
        this.pressedX();
    }
    else if (event.keyCode === 67) {
        this.pressedC();
    }
    //console.log("Keycode es "+event.keyCode)
  }
  switchOnOff() {
    if (this.state.status === "On") {
      this.setState(state => ({
   status: "Off",
        statusColor: "red",
        currentSound: ""
}))
    }
    else if (this.state.status === "Off") {
      this.setState( state => ({
        status: "On",
        statusColor: "green"
      }))
    }
      
}
  pressedQ() {if (this.state.status === "On") {
    const sound = document.getElementById("Q");
    sound.play();
    this.setState(state => ({currentSound: "Heater-1"}))}}  
  pressedW() {if (this.state.status === "On") {
    const sound = document.getElementById("W");
    sound.play();
    this.setState(state => ({currentSound: "Heater-2"}))}}
  pressedE() {if (this.state.status === "On") {
    const sound = document.getElementById("E");
    sound.play();
    this.setState(state => ({currentSound: "Heater-3"}))}}
  pressedA() {if (this.state.status === "On") {
    const sound = document.getElementById("A");
    sound.play();
    this.setState(state => ({currentSound: "Heater-4"}))}}
  pressedS() {if (this.state.status === "On") {
    const sound = document.getElementById("S");
    sound.play();
    this.setState(state => ({currentSound: "Clap"}))}}
  pressedD() {if (this.state.status === "On") {
    const sound = document.getElementById("D");
    sound.play();
    this.setState(state => ({currentSound: "Open-HH"}))}}
  pressedZ() {if (this.state.status === "On") {
    const sound = document.getElementById("Z");
    sound.play();
    this.setState(state => ({currentSound: "Kick-n'-Hat"}))}}
  pressedX() {if (this.state.status === "On") {
    const sound = document.getElementById("X");
    sound.play();    
    this.setState(state => ({currentSound: "Kick"}))}}
  pressedC() {if (this.state.status === "On") {
    const sound = document.getElementById("C");
    sound.play();    
    this.setState(state => ({currentSound: "Closed-HH"}))}}
  render() {
    return (
      <div id="bg">
  <div className="inner-container" id="drum-machine">
        <div className="pad-bank">
          <div>
            <button className="drum-pad" id="Heater-1" onClick={this.pressedQ}><audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>Q</button>
          </div>
          <div>
            <button className="drum-pad" id="Heater-2" onClick={this.pressedW}
              ><audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>W</button>
          </div>
          <div>
            <button className="drum-pad" id="Heater-3" onClick={this.pressedE}><audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>E</button>
          </div>
          <div>
            <button className="drum-pad" id="Heater-4" onClick={this.pressedA}><audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>A</button>
          </div>
          <div>
            <button className="drum-pad" id="Clap" onClick={this.pressedS}><audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>S</button>
          </div>
          <div>
            <button className="drum-pad" id="Open-HH" onClick={this.pressedD}><audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>D</button>
          </div>
          <div>
            <button className="drum-pad" id="Kick-n'-Hat" onClick={this.pressedZ}><audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>Z</button>
          </div>
          <div>
            <button className="drum-pad" id="Kick" onClick={this.pressedX}><audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>X</button>
          </div>
          <div>
            <button className="drum-pad" id="Closed-HH" onClick={this.pressedC}><audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>C</button>
          </div>
        </div>
        <div className="controls-container">
          <p id="power">Power</p>
          <button id="powerButton" onClick={() => this.switchOnOff()} style={{background: this.state.statusColor}}><p>{this.state.status}</p></button>
          <p id="power">Sound:</p>
            <div id="display"><p>{this.state.currentSound}</p></div>
</div>
        </div>
        </div>
    );
  }
};
*/

function App() {
  const [status, setStatus] = useState<string>("On")
  const [statusColor, setStatusColor] = useState<string>("green")
  const [currentSound, setCurrentSound] = useState<string>("")


  const switchOnOff = () => {
    if (status === "On") {
      setStatus("Off")
      setStatusColor("red")
      setCurrentSound("")
    }
    else if (status === "Off") {
      setStatus("On")
      setStatusColor("green")
      setCurrentSound("")
    }    
}  
  const pressedQ = () => {
    if (status === "On") {
      let soundQ = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
      soundQ.play()
      setCurrentSound("Heater-1")
    }
}
  const pressedW = () => {
    if (status === "On") {
      let soundW = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
      soundW.play();
      setCurrentSound("Heater-2");
    }
}
  const pressedE = () => {
    if (status === "On") {
      let soundE = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3");
      soundE.play();
      setCurrentSound("Heater-3");
    }
}
  const pressedA = () => {
    if (status === "On") {
      let soundA = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
      soundA.play();
      setCurrentSound("Heater-4");
    }
}
  const pressedS = () => {
    if (status === "On") {
      let soundS = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
      soundS.play();
      setCurrentSound("Clap");
    }
}
  const pressedD = () => {
    if (status === "On") {
      let soundD = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
      soundD.play();
      setCurrentSound("Open-HH");
    }
}
  const pressedZ = () => {
    if (status === "On") {
      let soundZ = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
      soundZ.play();
      setCurrentSound("Kick-n'-Hat");
    }
}
  const pressedX = () => {
    if (status === "On") {
      let soundX = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
      soundX.play();
      setCurrentSound("Kick");
    }
}
  const pressedC = () => {
    if (status === "On") {
      let soundC = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");
      soundC.play();
      setCurrentSound("Closed-HH");
    }
}
/*  
// event listeners to keys
  useEffect(() => {
    const handleKeyDown = (event) => {
      //console.log(petOffset[petOffset.length-25])

      // console.log("Keycode es " + event.keyCode);
      //console.log("Event es " + event.code);
      switch (event.code) {
        case "KeyW":
          pressedW()
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
        default:
        // do nothing
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  */
  return (
    <div className="App">
<div id="bg">
  <div className="inner-container" id="drum-machine">
        <div className="pad-bank">
          <div>
            <button className="drum-pad" id="Heater-1" onClick={pressedQ}><audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>Q</button>
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
          <p id="power">Power</p>
          <button id="powerButton" onClick={() => switchOnOff()} style={{background: statusColor}}><p>{status}</p></button>
          <p id="power">Sound:</p>
            <div id="display"><p>{currentSound}</p></div>
</div>
        </div>
        </div>
    </div>
  );
}

export default App;
