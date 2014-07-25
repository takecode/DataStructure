'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                options: {
                    livereload: true
                },
                files: [
                'app/js/**/*.js',
                'app/html/**/*.html',
                'app/css/**/*.css'
                ]
            },
            userScripts:{
                options:{
                    livereload: true
                },
                files: [
                    'app/js/user/**/*.js'
                ],
                tasks: ['concat']
            },
            karma: {
                files: ['app/js/**/*.js', 'test/**/*.js'],
                tasks: ['karma:unit']
            }
        },
        jshint: {
            options: {
                '-W034': true,
                jshintrc: '.jshintrc'
            },
            all:[
            'Gruntfile.js',
            'karma.conf.js',
            'app/js/**/*.js',
            'test/**/*.js'
            ]
        },
        connect: {
            server: {
                options: {
                    port: 8888,
                    hostname: '*',
                    base: './app/'
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            }
        },
        copy: {
            main: {
                files: [
                {src: ['app/css/**'], dest: 'dist/'},
                {src: ['app/js/**'], dest: 'dist/'},
                {src: ['app/html/**'], dest: 'dist/'},
                {src: ['app/index.html'], dest: 'dist/'},
                {src: ['app/bower_components/bootstrap/dist/css/bootstrap.min.css'], dest: 'dist/'},
                {src: ['app/bower_components/angular/angular.min.js'], dest: 'dist/'}
                ]
            }
        },
        concat:{
            disk:{
                src:[
                    'app/js/user/**/*.js'
                ],
                dest: 'app/js/user.js'
            }
        }
    });

    grunt.registerTask('default', [
    'jshint',
    'connect',
    'concat',
    'watch'
    ]);

    grunt.registerTask('test', [
    'jshint',
    'karma'
    ]);

    grunt.registerTask('dist', [
    'jshint',
    'copy'
    ]);
};
