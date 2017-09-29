import React, { Component } from 'react';

import { Categories } from './categories';
import { Products } from './products';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Store</h1>
        </div>

        <Categories />
        <Products />
      </div>
    );
  }
}

export default App;
