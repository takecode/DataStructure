'use strict';

/**
 * Created by YeongminCha on 2014. 07. 15..
 */
var dataStructureApp= angular.module('DataStructureApp.Factory', []);

dataStructureApp.factory( 'DataStructureFactory', function(){
    var factory = {};

    factory.list = [];

    return factory;
});

dataStructureApp.factory( 'DefinitionFactory', function(){
    var factory = {};

    factory.list = [];

    return factory;
});
