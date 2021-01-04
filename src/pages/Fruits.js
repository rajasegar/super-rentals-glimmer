import Component from '@glimmer/component';
import { setComponentTemplate, createTemplate, templateOnlyComponent } from '@glimmer/core';

class Fruits extends Component {

  constructor() {
    super(...arguments);
    const { querystring } = this.args.ctx;
    const [,fruit]  = querystring.split('=');
    this.fruit = fruit;
  }
}

setComponentTemplate(createTemplate(`
<h1>Fruits page</h1>
<p>Fruit name: {{this.fruit}}</p>
`),Fruits);

export default Fruits;
