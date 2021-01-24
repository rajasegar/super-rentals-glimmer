import Component from '@glimmer/component';

import {
  setComponentTemplate,
  createTemplate,
} from '@glimmer/core';

const TWEET_INTENT = 'https://twitter.com/intent/tweet';

export default class ShareButton extends Component {

  get currentURL() {
    return new URL(location.pathname, window.location.origin);
  }

  get shareURL() {
    let url = new URL(TWEET_INTENT);

    url.searchParams.set('url', this.currentURL);

    if (this.args.text) {
      url.searchParams.set('text', this.args.text);
    }

    if (this.args.hashtags) {
      url.searchParams.set('hashtags', this.args.hashtags);
    }

    if (this.args.via) {
      url.searchParams.set('via', this.args.via);
    }

    return url;
  }
}
setComponentTemplate(createTemplate(`
<a
  ...attributes
  href={{this.shareURL}}
  target="_blank"
  rel="external nofollow noopener noreferrer"
  class="share button"
>
  {{yield}}
</a>
`), ShareButton);

