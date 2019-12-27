import React from 'react';
import logo from './logo.png';
import './App.css';

class App extends React.Component {  
  render() {
    console.log(this.state)
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
}

export default App;
