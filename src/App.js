import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from '../src/components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Burger from './components/Burger/Burger';

class App extends Component {
  render() {
    return(
      <div>
        <Layout>
           <BurgerBuilder />
        </Layout>
      </div>
    )
  }
}

export default App;
