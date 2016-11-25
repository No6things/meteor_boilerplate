import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Goals = new Mongo.Collection('goals');

Meteor.methods({
  'goals.insert'(_amount, _item, _machine){
    check(_amount, Number);
    check(_item, String);
    check(_machine, String);
    
    Goals.insert({
      amount: _amount,
      item: _item,
      machine: _machine,
      createdAt: new Date()
    });
  },
  'goals.remove'(goalId){
    check(goalId, String)
    Goals.remove(goalId);
  }
});
