import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
function randomCursor() {
    var cursorArray = ["url(/cur/fresa.cur), auto", "url(/cur/sword.cur), auto"];
    var rand = cursorArray[~~(Math.random() * cursorArray.length | 0)];
    document.getElementById(App).css("cursor", rand);
  };
randomCursor();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
