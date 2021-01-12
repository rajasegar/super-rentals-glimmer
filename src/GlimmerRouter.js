import Component from '@glimmer/component';
import LocaleService from './services/LocaleService.js';
import { renderComponent } from '@glimmer/core';
import Loading from './Loading.js';
import page from 'page';

import {
  createTemplate,
  setComponentTemplate,
  templateOnlyComponent,
  getOwner,
} from '@glimmer/core';


class Route extends Component {

  constructor() {
    super(...arguments);
    const router = getOwner(this).services.router;
    const { path, component } = this.args;
    const route = { path, component };
    router.addRoute(route);
  }
}

setComponentTemplate(createTemplate(``), Route);

class Router extends Component {
  constructor() {
    super(...arguments);
  }

  get router() {
    return getOwner(this).services.router;
  }
}

function startRouting(element, router) {

  const loading = (ctx, next) => {
    element.innerHTML = '';
    renderComponent(Loading, element);
    next();
  };

  router.registry.forEach(r => {
    page(r.path, loading, (ctx) => {
      import(`./pages/${r.component}.js`).then(component => {
        element.innerHTML = '';
        renderComponent(component.default, { 
          element,
          owner: {
            services: {
              locale: new LocaleService('en_US'),
            },
          },
          args: {
            ctx
          }
        });
      });
    });
  });

  page('*', () => {
    import('./NotFound.js').then(component => {
      element.innerHTML = '';
      renderComponent(component.default, { 
        element,
      });
    });
  });

  page();
}

setComponentTemplate(createTemplate({ startRouting }, `
<div id="glimmer-router-outlet" {{startRouting this.router}}></div>
`), Router)

export { Router, Route };
