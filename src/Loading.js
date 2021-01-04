import Component from '@glimmer/component';
import { setComponentTemplate, createTemplate, templateOnlyComponent } from '@glimmer/core';

const Loading = setComponentTemplate(createTemplate(`
<h1>Loading page</h1>
<h2>Please wait...</h2>
`),templateOnlyComponent());

export default Loading;

