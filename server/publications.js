import { Meteor } from 'meteor/meteor';
import { publishPagination } from 'meteor/kurounin:pagination';
import {Books} from "../lib/collections";

publishPagination(Books);

Meteor.publish('Books', function publishBooks(){
  return Books.find();
});
