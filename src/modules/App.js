import React, { Component } from 'react';

import { Categories } from './categories';
import { Products } from './products';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Store</h2>
        <Categories />
        <Products />
      </div>
    );
  }
}

export default App;
