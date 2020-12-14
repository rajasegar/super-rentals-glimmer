import { renderComponent } from '@glimmer/core';
import MyComponent from './MyComponent.js';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const element = document.getElementById('app');
    renderComponent(MyComponent, {
      element: element,
    });
  },
  { once: true }
);
