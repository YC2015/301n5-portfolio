var projects = [];

function ProjectOb (input) {
  this.name = input.name;
  this.techtype = input.techtype;
  this.description = input.description;
}

ProjectOb.prototype.toHtml = function(){
  var $newProject = $('section.template').clone();
};

//add delgation
