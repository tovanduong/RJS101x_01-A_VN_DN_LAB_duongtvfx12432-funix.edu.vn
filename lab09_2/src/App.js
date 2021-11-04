import Main from './Component/mainComponent';
import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import history from './helps/history';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();
class App extends Component {

  render() {
    return (
      <Router history={history}>
        <Provider store={store}>
          <div className="App">
            <Main />
          </div>
        </Provider>
      </Router>
    );
  }
}
export default App;