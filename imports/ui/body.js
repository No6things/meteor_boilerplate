import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Tools } from '../api/tools.js';
import { Products } from '../api/products.js';
import { Goals } from '../api/goals.js';

import './body.html';

import './tool.js';
import './productionGraph.js';

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
});

Template.body.helpers({
  tools() {
    return Tools.find({});
  },
  products() {
    return Products.find({});
  },
  users() {
    return Users.find({});
  },
});

Template.body.events({
  'submit .new-goal'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    // Get value from form element
    const target = event.target;
    const amount = target.text.value;
    const product = target.productSelect.value
    const machine = target.toolSelect.value;

    // Insert a task into the collection
    Meteorcall('goals.insert', amount,  product, machine);
    target.text.value = '';
    target.productSelect.value = '';

  },

});
