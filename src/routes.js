import { renderComponent } from '@glimmer/core';
import page from 'page';
import LocaleService from './services/LocaleService.js';

export default function(element) {

  function showPageLoad(ctx, next) {
    element.innerHTML = 'Loading page...';
    next();
  }

  page('/', showPageLoad, () => {
    import('./pages/Home.js').then(component => {
    element.innerHTML = '';
    renderComponent(component.default, {
      element: element,
      owner: {
        services: {
          locale: new LocaleService('en_US'),
        },
      }
    });
    });
  });
  page('/about',showPageLoad, () => {
    import('./pages/About.js').then(component => {
    element.innerHTML = '';
    renderComponent(component.default, element);
    });
  });
  page('/contact', showPageLoad, () => {
    import('./pages/Contact.js').then(component => {
    element.innerHTML = '';
    renderComponent(component.default, element);
    });
  });

  page();
  
}

