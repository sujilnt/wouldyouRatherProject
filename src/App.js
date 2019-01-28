import React, {Component} from 'react';
import Container from "./components/Container/Container";
import "./App.css";
class App extends Component {
  render() {
    console.log('%c APP ', 'background: #222; color: #bada55');
    return (
      <div className="App">
        <Container/>
      </div>
    );
  }
}

export default App;
