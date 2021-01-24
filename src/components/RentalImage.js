import Component from '@glimmer/component';
import { setComponentTemplate, createTemplate } from '@glimmer/core';
import { tracked } from '@glimmer/tracking';
import { on, action } from '@glimmer/modifier';

export default class RentalImage extends Component {
  @tracked isLarge = false;

  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
};

setComponentTemplate(createTemplate({ on }, `
<button type="button" class="image {{if this.isLarge "large"}}" {{on "click" this.toggleSize}}>
  <img ...attributes>
  <small>View {{if this.isLarge "Smaller" "Larger"}}</small>
</button>
`), RentalImage);

