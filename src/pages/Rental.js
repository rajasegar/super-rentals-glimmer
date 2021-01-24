import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { setComponentTemplate, createTemplate, templateOnlyComponent } from '@glimmer/core';

import Jumbo from '../components/Jumbo.js';
import RentalImage from '../components/RentalImage.js';
import ShareButton from '../components/ShareButton.js';
import Map from '../components/Map.js';

class Rental extends Component {
  @tracked rental;

  constructor() {
    super(...arguments);

    const { params: { id }} = this.args.ctx;
    (async () => {
      const response = await fetch(`/api/rentals/${id}.json`);
      const data = await response.json();
       this.rental = data.data.attributes; 
    })();
  }
}

setComponentTemplate(createTemplate({ Jumbo, RentalImage, ShareButton, Map }, `
<Jumbo>
  <h2>{{this.rental.title}}</h2>
  <p>Nice find! This looks like a nice place to stay near {{this.rental.city}}.</p>
  <ShareButton
    @text="Check out {{this.rental.title}} on Super Rentals!"
    @hashtags="vacation,travel,authentic,blessed,superrentals"
    @via="emberjs"
  >
    Share on Twitter
  </ShareButton>
</Jumbo>

<article class="rental detailed">
  <RentalImage
    src={{this.rental.image}}
    alt="A picture of {{this.rental.title}}"
  />

  <div class="details">
    <h3>About {{this.rental.title}}</h3>

    <div class="detail owner">
      <span>Owner:</span> {{this.rental.owner}}
    </div>
    <div class="detail type">
      <span>Type:</span> {{this.rental.type}} – {{this.rental.category}}
    </div>
    <div class="detail location">
      <span>Location:</span> {{this.rental.city}}
    </div>
    <div class="detail bedrooms">
      <span>Number of bedrooms:</span> {{this.rental.bedrooms}}
    </div>
    <div class="detail description">
      <p>{{this.rental.description}}</p>
    </div>
  </div>

  <Map
    @lat={{this.rental.location.lat}}
    @lng={{this.rental.location.lng}}
    @zoom="12"
    @width="894"
    @height="600"
    alt="A map of {{this.rental.title}}"
    class="large"
  />
</article>

`),Rental);

export default Rental;
