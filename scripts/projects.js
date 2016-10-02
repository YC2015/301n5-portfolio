var projectsarray = [];

function ProjectOb (input) {
  this.name = input.name;
  this.techtype = input.techtype;
  this.description = input.description;
}

ProjectOb.prototype.toHtml = function(){
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.find('h3').text(this.name);
  $newProject.find('#tech').text(this.techtype);
  $newProject.find('#des').text(this.description);
  return $newProject;
};

projectData.forEach(function(a){
  projectsarray.push(new ProjectOb(a));
});

projectsarray.forEach(function(b) {
  $('#projects').append(b.toHtml());
});
