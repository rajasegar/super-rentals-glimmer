import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {
  createTemplate,
  setComponentTemplate,
  templateOnlyComponent
} from '@glimmer/core';
import { on, action } from '@glimmer/modifier';


class MyComponent extends Component {
  message = 'hello world';
  @tracked count = 55;

  @action
  increment() {
    this.count++;
  }
}

const TemplateOnlyComponent = setComponentTemplate(
  createTemplate(`<h1>I am rendered by a template only component: {{@name}}</h1>`),
  templateOnlyComponent()
);


setComponentTemplate(
  createTemplate({ TemplateOnlyComponent, on }, ` 
    <h1>Hello</h1> 
    <p>{{this.message}}</p>
    <p>{{this.count}}</p>
    <button {{on "click" this.increment}}>+</button>
    <TemplateOnlyComponent @name="Glimmer"/>
    `),
  MyComponent
);

export default MyComponent;
