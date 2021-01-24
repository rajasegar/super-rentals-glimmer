import Component from '@glimmer/component';
import { setComponentTemplate, createTemplate, templateOnlyComponent } from '@glimmer/core';

const Navbar = setComponentTemplate(createTemplate(`
<nav class="menu">
  <a href="/" class="menu-index">
    <h1>SuperRentals</h1>
  </a>
  <div class="links">
    <a href="/about" class="menu-about">
      About
    </a>
      <a href="/contact" class="menu-contact">
      Contact
    </a>
  </div>
</nav>
`),templateOnlyComponent());

export default Navbar;


