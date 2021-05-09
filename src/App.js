
import React, {Component} from 'react';
import "./styles.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      //[
      //  {name: "James"},
      //  {name: "John"},
      //  {name: "Jack"}
      
      //]

      name: "James"
    };
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.state.name} </h1>
        <button onClick={() => this.setState({name: "John"})}>Change Name!</button>
      </div>
    );
  }
}

export default App;
