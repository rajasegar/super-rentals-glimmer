import Component from '@glimmer/component';
import {
  createTemplate,
  setComponentTemplate,
  templateOnlyComponent,
} from '@glimmer/core';

class Home extends Component {

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
<RentalList/>

    `
  ),
  Home
);

export default Home;
