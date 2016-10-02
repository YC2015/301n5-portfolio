'use strict';

var projectsarray = [];

function ProjectOb (input) {
  this.name = input.name;
  this.techtype = input.techtype;
  this.description = input.description;
}
<<<<<<< HEAD
=======

ProjectOb.prototype.toHtml = function(){
  var source = $('#project-template').html;
  var template = Handlebars.compile(source);
  return template(this);
};

//add delgation
 // create function to loop through the project objects to push into array

 // create function to loop through and append projects and run the toHtml method
>>>>>>> 722edb1431a56fd48b90332d23d010e15895266e
