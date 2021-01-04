import Component from '@glimmer/component';
import { setComponentTemplate, createTemplate, templateOnlyComponent } from '@glimmer/core';


const veggies = [
  {
    id: 1,
    name: 'Carrot',
    description: 'I am good for eyes'
  },
  {
    id: 2,
    name: 'Beans',
    description: 'I am good for kidneys'
  }
];

class Vegetables extends Component {

  constructor() {
    super(...arguments);
    console.log(this.args.ctx);
    const { params: { id }} = this.args.ctx;
    const veggie = veggies.find(v => v.id === Number(id));
    this.vegetable = veggie;
  }
}

setComponentTemplate(createTemplate(`
<h1>Vegetables page</h1>
<p>Vegetable name: {{this.vegetable.name}}</p>
<p>{{this.vegetable.description}}</p>
`),Vegetables);

export default Vegetables;
