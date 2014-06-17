/**
 * Created by YeongminCha on 14. 6. 17.
 */

'use strict';

var dataStructureApp = angular.module('DataStructureApp.Router', ['ui.router']);

dataStructureApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'oldIndex.html'

        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {

            views: {
                // the main template will be placed here (relatively named)
                '': { templateUrl: 'html/about.html' },

                // the child views will be defined here (absolutely named)
                'columnOne@about': { template: 'Look I am a column!' },

                // for column two, we'll define a separate controller
                'columnTwo@about': {
                    templateUrl: 'html/about.html',
                    controller: 'scotchController'
                }
            }
        })
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        });
});
