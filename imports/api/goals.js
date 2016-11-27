import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Goals = new Mongo.Collection('goals');

Meteor.methods({
  'goals.insert'(_price, _amount, _product, _tool){
    check(_price, Number);
    check(_amount, Number);
    check(_product, String);
    check(_tool, String);

    Goals.insert({
      price: _price,
      amount: _amount,
      product: _product,
      tool: _tool,
      createdAt: new Date()
    });
  },
  'goals.remove'(goalId){
    check(goalId, String)
    Goals.remove(goalId);
  }
});
