import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Records = new Mongo.Collection('records');

Meteor.methods({
  'records.insert'( _goal, _product, _amount, _operator){
    check(_goal, String);
    check(_product, String);
    check(_amount, Number);
    check(_operator, String);

    record.insert({
      goal: _goal,
      product: _product,
      amount: _amount,
      operator: _operator,
      createdAt: new Date();
    });
  },
  'records.remove'(recordId){
    check(recordId, String)
    Tools.remove(recordId);
  },/*
  'records.countByTool'(toolId){
    check(toolId, String)
    record.find({tool:toolId}).count();
  },*/
});
