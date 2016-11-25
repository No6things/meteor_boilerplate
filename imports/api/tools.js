import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Tools = new Mongo.Collection('tools');

Meteor.methods({
  'tools.insert'(_name, _output, _operator, _maxload){
    check(_name, String);
    check(_maxload, Number);
    check(_operator, String);
    check(_maxload, String);

    if(! this.userId){
      throw new Meteor.Error('not-authorized');
    }
    Tools.insert({
      name: _name,
      output: _output,
      operator: _operator,
      maxload: _maxload,
      createdAt: new Date()
    });
  },
  'tools.remove'(toolId){
    check(toolId, String)
    Tools.remove(toolId);
  },
});
