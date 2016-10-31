'use strict';

(function(module){

  function ProjectOb (input) {
    this.name = input.name;
    this.techtype = input.techtype;
    this.description = input.description;
  }

  // mapping and reducing to get new array
  ProjectOb.numbers = function(){
    return ProjectOb.all.map(function(e){
      return e.techtype.split(' ').length;
    });
  };

  // tracking objects in the constructor
  ProjectOb.all = [];

  // creates html template
  ProjectOb.prototype.toHtml = function(){
    var source = $('#template-script').html();
    var template = Handlebars.compile(source);
    return template(this);
  };

  // function that takes data and pushes into constructor array and also appends to index page
  ProjectOb.loadAll = function(rawData){
    rawData.forEach(function(a) {
      ProjectOb.all.push(new ProjectOb(a));
      console.log(a);
    });

    ProjectOb.all.forEach(function(b) {
      $('#projects').append(b.toHtml());
    });

  };

  // AJAX and JSON
  ProjectOb.fetchAll = function (){
    if (localStorage.rawData){
      ProjectOb.loadAll(JSON.parse(localStorage.rawData));
    } else {
      $.getJSON('data/source.json', function (datastuff){
        ProjectOb.loadAll(datastuff);
        localStorage.rawData = JSON.stringify(datastuff);
      }
    );
    }
  };


  module.ProjectOb = ProjectOb;
})(window);
