import { Template } from 'meteor/templating';
import { Tools } from '../api/tools.js';
import { Products } from '../api/products.js';


import './tool.html';

Template.toolCount.helpers({
  products() {
    return Products.find({tool: this._id}).count();
  },
});


Template.toolCount.events({
  'click .toggle-checked'() {
    Tools.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },

  'click .delete'() {
    Tools.remove(this._id);
  },
});
