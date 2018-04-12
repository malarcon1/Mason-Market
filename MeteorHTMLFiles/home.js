import {Template} from 'meteor/templating';
import './login.html';
import { Books } from '../lib/collections.js';
import {BookContract} from "../contracts/book_contract.js";

Template.home.helpers({
    firstName: function () {
        return Meteor.user().emails[0].address;
    },
    books: function(){

        // this is how to create and insert a new book
        // let myBook = new BookContract(
        //     title="Book from server code",
        //     price=19.99,
        //     description="This is a random book.",
        //     imagesrc="book.jpg",
        //     owner="user@masonlive.gmu.edu",
        //     condition="new");
        // Books.insert(myBook);
        return Books.find();
    },

    isReady: function () {
        return Template.instance().pagination.ready();
    },
    templatePagination: function () {
        return Template.instance().pagination;
    },
    documents: function () {
        return Template.instance().pagination.getPage();
    },
    // optional helper used to return a callback that should be executed before changing the page
    clickEvent: function() {
        return function(e, templateInstance, clickedPage) {
            e.preventDefault();
            console.log('Changing page from ', templateInstance.data.pagination.currentPage(), ' to ', clickedPage);
        };
    }


});

Template.home.events({
    'click .logout': function (event) {
        event.preventDefault();
        console.log("Test");
        Meteor.logout();
    }
});

Template.home.onCreated(function () {
    this.pagination = new Meteor.Pagination(Books, {
        sort: {
            _id: -1
        }
    });
});
