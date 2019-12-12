import React from 'react';
import logo from './logo.png';
import './App.css';

class App extends React.Component {
  state = {
    todos: [],
    inputText: ""
  }

  handleChange = (event) => {
    this.setState({inputText: event.target.value})
  }

  handleSubmit = (event) => {
    this.setState({
      todos: [...this.state.todos, this.state.inputText],
      inputText: ""
    
    })
    event.preventDefault()
  }

  listWeed = () => {
    return (
      <ul>
        
      </ul>
    )
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
            gewzer
        </header>
        <img src={logo} className="App-logo" alt="logo" />
        <div id="bioBox">
          juan escobedo aka 'gewzer'<br></br> 
          @gewzer38 on Instagram <br></br>
          @juander on <a href src="http://soundcloud.com/juander">SoundCloud</a> <br></br>
          los angeles / fresno
        </div>
        <form id="form1" onSubmit={this.handleSubmit}>
          <label>
            to do:   
            <input 
              type="text" 
              onChange={this.handleChange}
              value={this.state.inputText}
            /> 
          </label>
          
        </form>
        <ul>
         {this.state.todos.map(function(todo) {
           return <li>{todo}</li>
         })}
        </ul>
      </div>
    );
  }
}

export default App;
