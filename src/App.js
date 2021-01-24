import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {
  createTemplate,
  setComponentTemplate,
  templateOnlyComponent,
  getOwner
} from '@glimmer/core';

import { on, action } from '@glimmer/modifier';
import { Router, Route } from './GlimmerRouter.js';

import './App.css';
import logo from './logo.svg';


class App extends Component {
  logo = logo;
}

import NavBar from './components/Navbar.js';

setComponentTemplate(
  createTemplate(
    { Router, Route, NavBar },
    `
    <div class="container">
  <NavBar />
  <div class="body">
      <Route @path="/" @component="Home"/>
      <Route @path="/about" @component="About"/>
      <Route @path="/contact" @component="Contact"/>
      <Route @path="/rental/:id" @component="Rental"/>
      <Router></Router>
  </div>
</div>

    `
  ),
  App
);

export default App;
