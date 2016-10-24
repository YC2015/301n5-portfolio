'use strict';

(function(module){

var pageDynamics = {};

pageDynamics.expandHamburger = function(){
  $('#hamburgerpicture').on('click', function(){
    $('nav').toggle(100);
  });
};

pageDynamics.expandHamburger();

  module.pageDynamics = pageDynamics;

})(window);
