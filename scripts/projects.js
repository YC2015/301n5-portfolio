var projects = [];

function ProjectOb (input) {
  this.name = input.name;
  this.techtype = input.techtype;
  this.description = input.description;
}

ProjectOb.prototype.toHtml = function(){
  var source = $('#project-template').html;
  var template = Handlebars.compile(source);
  return template(this);
};

//add delgation
 // create function to loop through the project objects to push into array

 // create function to loop through and append projects and run the toHtml method
