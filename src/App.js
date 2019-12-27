import React from 'react';
import logo from './logo.png';
import './App.css';

class App extends React.Component {  
  render() {
    return (
      <div className="App">
        <header className="App-header">
            gewzer
        </header>
        <img src={logo} className="App-logo" alt="logo" />
        <div id="bioBox">
          juan escobedo aka 'gewzer'
          <br></br> 
          @gewzer38 on <a href="https://www.instagram.com/gewzer38">instagram</a>
          <br></br>
          @juander on <a href="http://soundcloud.com/juander">soundcloud</a>
          <br></br>
          los angeles / fresno
          <br></br>
          3800
        </div>
      </div>
    );
  }
  randomCursor() {
    var cursorArray = ["url(/cur/fresa.cur), auto", "url(/cur/sword.cur), auto"];
    var rand = cursorArray[~~(Math.random() * cursorArray.length | 0)];
    document.getElementById("root").style.cursor = rand;
  };
}



export default App;
