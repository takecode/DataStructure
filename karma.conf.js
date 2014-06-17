'use strict';

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    autoWatch : true,
    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/js/**/*.js',
      'test/**/*.js'
    ]
  });
};
