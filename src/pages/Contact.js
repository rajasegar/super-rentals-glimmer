import Component from '@glimmer/component';
import { setComponentTemplate, createTemplate, templateOnlyComponent } from '@glimmer/core';

const Contact = setComponentTemplate(createTemplate(`
<h1>Contact page</h1>
`),templateOnlyComponent());

export default Contact;
