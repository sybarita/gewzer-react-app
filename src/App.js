import React from 'react';
import logo from './logo.svg';
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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Smoke weed every day
          </p>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>
            weed   
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
