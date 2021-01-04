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



setComponentTemplate(
  createTemplate(
    { Router, Route },
    `
      <img src={{this.logo}} width="128"/>
      <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/fruits?name=apple">Fruits - Apple</a></li>
        <li><a href="/fruits?name=orange">Fruits - Orange</a></li>
        <li><a href="/vegetables/1">Vegetables - 1</a></li>
        <li><a href="/vegetables/2">Vegetables - 2</a></li>
        <li><a href="/xyz">(404) Not Found</a></li>
      </ul>
      </nav>
      <Route @path="/" @component="Home"/>
      <Route @path="/about" @component="About"/>
      <Route @path="/contact" @component="Contact"/>
      <Route @path="/fruits" @component="Fruits"/>
      <Route @path="/vegetables/:id" @component="Vegetables"/>
      <Router></Router>
    `
  ),
  App
);

export default App;
