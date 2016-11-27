import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Products = new Mongo.Collection('products');

Meteor.methods({
  'products.insert'(_name, _intake, _volume, _tool, _operator){
    check(_name, String);
    check(_intake, Number);
    check(_volume, Number);
    check(_tool, String);
    check(_operator, String);

    Product.insert({
      name: _name,
      intake: _intake,
      volume: _volume,
      tool: _tool,
      operator: _operator,
      createdAt: new Date()
    });
  },
  'products.remove'(productId){
    check(productId, String)
    Tools.remove(productId);
  },/*
  'products.countByTool'(toolId){
    check(toolId, String)
    Product.find({tool:toolId}).count();
  },*/
});
