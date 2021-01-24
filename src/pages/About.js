import Component from '@glimmer/component';
import { setComponentTemplate, createTemplate, templateOnlyComponent } from '@glimmer/core';


import Jumbo from '../components/Jumbo.js';

const About = setComponentTemplate(createTemplate({ Jumbo }, `
<Jumbo>
  <h2>About Super Rentals</h2>
  <p>
    The Super Rentals website is a delightful project created to explore Glimmer.
    By building a property rental site, we can simultaneously imagine traveling
    AND building Glimmer applications.
  </p>
  <a href="/contact" class="button">Contact Us</a>
</Jumbo>

`),templateOnlyComponent());

export default About;
