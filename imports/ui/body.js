import { Template } from 'meteor/templating';
import { Tools } from '../api/tools.js';

import './body.html';

Template.body.helpers({
  tools() {
    return Tools.find({});
  }
});
