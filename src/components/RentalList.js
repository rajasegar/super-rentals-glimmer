import Component from '@glimmer/component';
import { setComponentTemplate, createTemplate, templateOnlyComponent } from '@glimmer/core';
import { tracked } from '@glimmer/tracking';
import { on, action } from '@glimmer/modifier';

import RentalsFilter from './RentalsFilter.js';
import Rental from './Rental.js';

export default class RentalList extends Component {

  @tracked query = '';
  @tracked rentals = [];

  constructor() {
    super(...arguments);

    (async () => {
      const response = await fetch('/api/rentals.json');
      const data = await response.json();
      this.rentals = data.data;
    })();
  }

  @action 
  updateQuery(element) {
    this.query = element.target.value;
  }
}

setComponentTemplate(createTemplate({ RentalsFilter, Rental, on },`
<div class="rentals">
  <label>
    <span>Where would you like to stay?</span>
    <input {{on 'input' this.updateQuery}} class="light" />
  </label>

  <ul class="results">
    <RentalsFilter @rentals={{this.rentals}} @query={{this.query}} as |results|>
      {{#each results as |rental|}}
        <li><Rental @rental={{rental}} /></li>
      {{/each}}
    </RentalsFilter>
  </ul>
</div>

`), RentalList);


