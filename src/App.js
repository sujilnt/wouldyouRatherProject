import React, { Component } from 'react';
//import C from "./constants";
import logo from './logo.svg';
import './App.css';
import storeFactory from "./store/storeFactory";
import {getQuestions,getUsers} from "./store/action";

const store =storeFactory({});
window.store=store;
store.dispatch(
    getUsers()
);
store.dispatch(
    getQuestions()
);
const saveState= ()=>{
  window.localStorage["app-store"] = JSON.stringify(store.getState());
  console.log(store.getState())
};
store.subscribe(saveState);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
