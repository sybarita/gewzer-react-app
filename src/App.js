import React from "react";
import logo from "./logo.png";
import "./App.css";
import fresa from "./cur/fresa.cur";
import sword from "./cur/sword.cur";
import bug from "./cur/bug.cur";

class App extends React.Component {
  cursorStyle(rand) {
    return `cursor:${rand}`;
  }

  render() {
    const cursorArray = [fresa, sword, bug];
    const rand = cursorArray[~~((Math.random() * cursorArray.length) | 0)];
    console.log(rand);
    const randString = "url(" + rand + "), crosshair";
    console.log(randString);
    return (
      <div className="App" onKeyPress={this.keyPress} style={{ cursor: randString }}>
        <header className="App-header">gewzer</header>
        <img src={logo} className="App-logo" alt="logo" />
        <div id="showBio">
          <button id="bioButton">who?</button>
        </div>
        <div id="bioBox">
          <span>
            juan escobedo aka 'gewzer'
            <br></br>
            @gewzer38 on{" "}
            <a href="https://www.instagram.com/gewzer38">instagram</a>
            <br></br>
            @juander on <a href="http://soundcloud.com/juander">soundcloud</a>
            <br></br>
            los angeles / fresno
            <br></br>
            3800
          </span>
        </div>
      </div>
    );
  }

  keyPress(event) {
    console.log(event.key);
  }

  keypressApp(keyCode, audioId) {
    document.addEventListener("keydown", function(e) {
      if (e.keyCode === keyCode) {
        audioId.play();
        console.log(keyCode);
      }
    });

    this.keypressApp(71, "helados1");
    this.keypressApp(69, "helados2");
    this.keypressApp(87, "helados3");
    this.keypressApp(90, "helados4");
    this.keypressApp(82, "helados5");
  }
}

export default App;
