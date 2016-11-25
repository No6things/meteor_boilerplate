import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Products = new Mongo.Collection('products');

Meteor.methods({
  'products.insert'(_name, _price, _intake, _volume, _machine, _operator){
    check(_name, String);
    check(_price, Number);
    check(_intake, Number);
    check(_volume, Number);
    check(_machine, String);
    check(_operator, String);

    if(! this.userId){
      throw new Meteor.Error('not-authorized');
    }
    Product.insert({
      name: _name,
      price: _price,
      intake: _intake,
      volume: _volume,
      machine: _machine,
      operator: _operator
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
