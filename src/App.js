import React from "react";
import logo from "./logo.png";
import "./App.css";
import fresa from "./cur/fresa.cur";
import sword from "./cur/sword.cur";
import bug from "./cur/bug.cur";
import helados1 from "./helados/helados1.wav";
import helados2 from "./helados/helados2.wav";
import helados3 from "./helados/helados3.wav";
import helados4 from "./helados/helados4.wav";
import helados5 from "./helados/helados5.wav";

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
      <div
        tabIndex="1"
        className="App"
        onKeyDown={this.keypressApp}
        style={{ cursor: randString }}
      >
        <header className="App-header">
          <span id="headerSpan">gewzer</span>
        </header>
        <img src={logo} className="App-logo" alt="logo" />
        <div id="showBio">
          <button id="bioButton">who?</button>
        </div>
        <div id="bioBox">
          <span id="bioSpan">
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

  h1 = new Audio(helados1);
  h2 = new Audio(helados2);
  h3 = new Audio(helados3);
  h4 = new Audio(helados4);
  h5 = new Audio(helados5);

  keypressApp = event => {
    if (event.key === "g") {
      this.h1.play();
    } else if (event.key === "e") {
      this.h2.play();
    } else if (event.key === "w") {
      this.h3.play();
    } else if (event.key === "z") {
      this.h4.play();
    } else if (event.key === "r") {
      this.h5.play();
    }
  };
}

export default App;
