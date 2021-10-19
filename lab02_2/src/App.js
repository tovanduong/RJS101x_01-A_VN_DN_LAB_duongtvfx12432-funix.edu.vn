import './App.css';
import React, { Component } from 'react';
import { DISHES } from './shared/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './component/menuComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: DISHES
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes ={this.state.dish} />
      </div>
    );
  }
}

export default App;
