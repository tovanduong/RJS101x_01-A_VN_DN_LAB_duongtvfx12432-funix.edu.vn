import Main from './Component/mainComponent';
import React, { Component } from 'react';
import history from "../node_modules/history/cjs/history";
import { BrowserRouter } from 'react-router-dom';
import './App.css';
class App extends Component {

  render() {
    return (
        <BrowserRouter history={history}>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
    );
  }
}
export default App;