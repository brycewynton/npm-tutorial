var moment = require("moment");

var unique = require('uniq');

var myDate = new Date(); // turns out I enjoy the way this classic one looks much more than moment format

var momentFormattedDate = moment(myDate).format("dddd, MMMM Do YYYY, h:mm:ss a");


var myList = [1,2,1,1,1,3,3,4,5,6,4,4,7];

var myUniqueList = unique(myList);


console.log(momentFormattedDate); // prints current date in moment format from node.js library
console.log(myUniqueList);


