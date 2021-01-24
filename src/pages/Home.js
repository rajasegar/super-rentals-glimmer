import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {
  createTemplate,
  setComponentTemplate,
  templateOnlyComponent,
} from '@glimmer/core';

class Home extends Component {
  @tracked rentals=[];

  constructor() {
    super(...arguments);
    (async () => {
      const response = await fetch('/api/rentals.json');
      const data = await response.json();
      console.log(data);
      this.rentals = data.data;
    })();
  }

}

import Jumbo from '../components/Jumbo.js';
import RentalList from '../components/RentalList.js';

setComponentTemplate(
  createTemplate(
    { Jumbo, RentalList },
    `
    <Jumbo>
  <h2>Welcome to Super Super Rentals!</h2>
  <p>We hope you find exactly what you're looking for in a place to stay.</p>
  <a href="/about" class="button">About Us</a>
</Jumbo>
<RentalList @rentals={{this.rentals}}/>

    `
  ),
  Home
);

export default Home;
