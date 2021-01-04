import Component from '@glimmer/component';
import { setComponentTemplate, createTemplate, templateOnlyComponent } from '@glimmer/core';

const NotFound = setComponentTemplate(createTemplate(`
<h1>404</h1>
<h2>Page Not Found</h2>
`),templateOnlyComponent());

export default NotFound;
