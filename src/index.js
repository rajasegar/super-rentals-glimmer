import { renderComponent } from '@glimmer/core';
import App from './App.js';
import LocaleService from './services/LocaleService.js';
import RouterService from './services/RouterService.js';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const element = document.getElementById('app');
    renderComponent(App, {
      element: element,
      owner: {
        services: {
          locale: new LocaleService('en_US'),
          router: new RouterService(),
        },
      },
    });
  },
  { once: true }
);
