import Component from '@glimmer/component';
import { setComponentTemplate, createTemplate, templateOnlyComponent } from '@glimmer/core';

import { tracked } from '@glimmer/tracking';
import { on, action } from '@glimmer/modifier';

import RentalImage from './RentalImage.js';
import Map from './Map.js';

const COMMUNITY_CATEGORIES = [
  'Condo',
  'Townhouse',
  'Apartment'
];

class Rental extends Component {
  get url() {
    return `/rental/${this.args.rental.id}`;
  }

  get rentalType() {
if (COMMUNITY_CATEGORIES.includes(this.args.rental.category)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}

setComponentTemplate(createTemplate({ RentalImage, Map }, `
<article class="rental">
  <RentalImage
    src={{@rental.image}}
    alt="A picture of {{@rental.title}}"
  />
  <div class="details">
    <h3>
      <a href={{this.url}} >
        {{@rental.title}}
      </a>
    </h3>
    <div class="detail owner">
      <span>Owner:</span> {{@rental.owner}}
    </div>
    <div class="detail type">
      <span>Type:</span> {{this.rentalType}}
    </div>
    <div class="detail location">
      <span>Location:</span> {{@rental.city}}
    </div>
    <div class="detail bedrooms">
      <span>Number of bedrooms:</span> {{@rental.bedrooms}}
    </div>
  </div>
</article>

`),Rental);

export default Rental;

