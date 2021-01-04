import Component from '@glimmer/component';
import { setComponentTemplate, createTemplate, templateOnlyComponent } from '@glimmer/core';

const About = setComponentTemplate(createTemplate(`
<h1>About page</h1>
`),templateOnlyComponent());

export default About;
