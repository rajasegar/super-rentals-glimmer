import Component from '@glimmer/component';

import {
  setComponentTemplate,
  createTemplate,
  templateOnlyComponent
} from '@glimmer/core';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    let _rentals = rentals.map(r => { 
      const temp = r.attributes;
      temp.id = r.id;
      return temp;
    });

    if (query) {
      _rentals = _rentals.filter(rental => rental.title.includes(query));
    }

    return _rentals;
  }
}

setComponentTemplate(createTemplate(`
{{yield this.results}}
`), RentalsFilterComponent);

