import Component from '@glimmer/component';

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

export default class MapComponent extends Component {
  get src() {
    let { lng, lat, width, height, zoom } = this.args;

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions  = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  get token() {
    return encodeURIComponent(MAPBOX_ACCESS_TOKEN);
  }
}
import { setComponentTemplate, createTemplate, templateOnlyComponent } from '@glimmer/core';
const Map = setComponentTemplate(createTemplate(`
<div class="map">
  <img
    alt="Map image at coordinates {{@lat}},{{@lng}}"
    ...attributes
    src={{this.src}}
    width={{@width}} height={{@height}}
  >
</div>
`), MapComponent);
