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
      <div className="App" style={{cursor: randString }}>
        <header className="App-header">gewzer</header>
        <img src={logo} className="App-logo" alt="logo" />
        <div id="bioBox">
          juan escobedo aka 'gewzer'
          <br></br>
          @gewzer38 on{" "}
          <a href="https://www.instagram.com/gewzer38">instagram</a>
          <br></br>
          @juander on{" "}
          <a href="http://soundcloud.com/juander">soundcloud</a>
          <br></br>
          los angeles / fresno
          <br></br>
          3800
        </div>
      </div>
    );
  }
}

export default App;
