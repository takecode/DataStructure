'use strict';

/**
 * Created by YeongminCha on 2014. 5. 23..
 */
var dataStructureApp= angular.module('DataStructureApp.Controller', []);

// Index Controller
dataStructureApp.controller( 'IndexController',
 ['$scope', '$http', 'DataStructureFactory', 'DefinitionFactory',
 function( $scope, $http, DataStructureFactory, DefinitionFactory ){
     $http.get('json/Users.json').success(function(data) {
         $scope.users = data;
         $scope.user = $scope.users[0];
     });

     $http.get('json/DataStructures.json').success(function(data) {
         DataStructureFactory.list = data;
     });

     $http.get('json/Definition.json').success(function(data) {
         DefinitionFactory.list = data;
     });

 }]);

// Home Controller
dataStructureApp.controller( 'HomeController', ['$scope', 'DataStructureFactory',
 function( $scope, DataStructureFactory ){
    $scope.dataStructures = DataStructureFactory.list;
}]);

// Node Controller
dataStructureApp.controller( 'NodeController',
 ['$scope', '$state', 'DataStructureFactory', 'StateService',
 function( $scope, $state, DataStructureFactory, StateService ){
    $scope.initialize = function(){
        var i;
        $scope.dataStructures = DataStructureFactory.list;
        if( $scope.dataStructures === undefined ) return;
        for( i = 0; i < $scope.dataStructures.length; i++ ){
            var dataStructure = $scope.dataStructures[i];
            if( dataStructure.state === StateService.getFirstState( $state.current.name ) ){
                $scope.categories = dataStructure.child;
            }
        }
    };

    $scope.getClass = function(category) {
        if( $state.is( category.state ) ){
            return 'btn-primary active';
        } else {
            return '';
        }
    };

    $scope.initialize();
}]);

// Node.Chain Controller
dataStructureApp.controller( 'ChainController', ['$scope', '$state', 'StateService', 'DefinitionFactory',
 function( $scope, $state, StateService, DefinitionFactory ){
    $scope.initialize = function(){
        $scope.definitionList = DefinitionFactory.list;
        for( var count in $scope.definitionList ){
            var definition = $scope.definitionList[count];
            if( definition.name === "Node of Node" ){
                $scope.definitions = definition.definitions;
            }
        }
    };

    $scope.initialize();
}]);

// Tree Controller
dataStructureApp.controller('TreeController', ['$scope', function ( $scope ) {
    $scope.initialize= function () {
        $scope.tree = new Tree();
        $scope.treeWidth = [];
        $scope.testSample2();
        console.log( $scope.tree );
    };

    $scope.addRandomNode = function(){
        $scope.tree.insert();
    };

    $scope.addNode = function(){
        $scope.tree.insert( $scope.number );
    };

    $scope.clear = function(){
        $scope.tree.clear();
    };

    $scope.testSample = function(){
        var length = 9;
        for( var i = 0; i < length; i++ ){
            $scope.addRandomNode();
        }
    };

    $scope.testSample2 = function(){
        var length = 15;
        var numbers = [ 10, 5,  15, 3, 7, 13, 17, 1, 4, 6, 8, 11, 14, 16, 19 ];
        for( var i = 0; i < length; i++ ){
            $scope.number = numbers[i];
            $scope.addNode();
        }
    };

    $scope.getCx = function( node ){
        var width = 25;
        var depth = node.depth;
        var indent = node.getIndent( $scope.tree.leftstNode[depth] );
        node.x = ( $scope.tree.maxDepth - node.depth ) * width + width;
        node.x += indent * width;
        return node.x;
    };

    $scope.getCxOld = function( node ){
        var width = 25;
        var parentNode = node.parent;
        if( node === $scope.tree.root ){
            node.x = Math.pow( 2, $scope.tree.maxDepth - 1 ) * width + width;
        }
        else{
            if( node === parentNode.left ){
                node.x = parentNode.x - Math.pow( 2, $scope.tree.maxDepth - node.depth - 1 ) * width;
            }
            else{
                node.x = parentNode.x + Math.pow( 2, $scope.tree.maxDepth - node.depth - 1 ) * width;
            }
        }
        return node.x;
    };

    $scope.getCy = function( depth ){
        var height = 30;
        return height + depth * height;
    };

    $scope.isLeftChild = function( node ){
        if( node.parent === null ) { return false; }
        else if( node.parent.left === node ){ return true; }
        else{ return false; }
    };

    $scope.initialize();
}]);

/*
// Node Controller
dataStructureApp.controller('NodeController', ['$scope', function ( $scope ) {
    $scope.initialize= function () {
        $scope.calculateImagePosition();
    };

    $scope.calculateImagePosition = function(){
        var depth = $scope.node.depth;
        var width = $scope.treeWidth[depth];

        if( width === undefined ) { width = 1; }
        else { width++; }
        //console.log( "depth:" + depth + " width:" + width );

        $scope.cx = width * 40;
        $scope.cy = 30 + depth * 40;
        $scope.r = 14;
        $scope.x = $scope.cx - 15;
        $scope.y = $scope.cy + 2;
        $scope.lineColor = '#FF0000';
        //$scope.test = 1;

        console.log( $scope.cx );

        $scope.treeWidth[depth] = width;
    };

    $scope.initialize();
}]);
*/
