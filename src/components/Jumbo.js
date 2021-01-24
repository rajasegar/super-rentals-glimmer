import {
  setComponentTemplate,
  createTemplate,
  templateOnlyComponent
} from '@glimmer/core';

const Jumbo = setComponentTemplate(
  createTemplate(`
<div class="jumbo">
  <div class="right tomster"></div>
  {{yield}}
</div>
    `),
  templateOnlyComponent()
);

export default Jumbo;

