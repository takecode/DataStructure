'use strict';

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    autoWatch : true,
    files : [
      'app/bower_components/angular/angular.min.js',
      'app/bower_components/angular-resource/angular-resource.min.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'app/js/configs/*.js',
      'app/js/controllers/*.js',
      'app/js/directives/*.js',
      'app/js/factories/*.js',
      'app/js/filters/*.js',
      'app/js/services/*.js',
      'app/js/user/**/*.js',
      'app/js/*.js',
      'test/**/*.js'
    ]
  });
};
