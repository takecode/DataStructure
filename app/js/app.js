/**
* Created by YeongminCha on 2014. 08. 05..
*/

/*jshint undef:false */

(function () {
    angular.module('DataStructureApp', ['ui.router']);

    // -- Config --
    angular.module( 'DataStructureApp' )
    .config( ['$stateProvider', '$urlRouterProvider', UiRouterConfig] );

    // -- Factory --
    angular.module( 'DataStructureApp' )
    .factory( 'DataStructureFactory', ListFactory );

    angular.module( 'DataStructureApp' )
    .factory( 'DefinitionFactory', ListFactory );

    // -- Service --
    angular.module( 'DataStructureApp' )
    .service( 'UserService', UserService );

    angular.module( 'DataStructureApp' )
    .service( 'StateService', StateService );

    angular.module( 'DataStructureApp' )
    .service( 'UrlService', UrlService );

    angular.module( 'DataStructureApp' )
    .service( 'TestService', TestService );

    angular.module( 'DataStructureApp' )
    .service( 'DummyService', DummyService );

    // -- Directive --
    angular.module( 'DataStructureApp' )
    .directive( 'testDirective', TestDirective );

    angular.module( 'DataStructureApp' )
    .directive( 'exampleDirective',
    ['$compile', ExampleDirective] );

    angular.module( 'DataStructureApp' )
    .directive( 'listStructureDirective', ListStructureDirective );

    angular.module( 'DataStructureApp' )
    .directive( 'singlyLinkedListDirective', SinglyLinkedListDirective );

    // -- Controller --
    angular.module( 'DataStructureApp' )
    .controller( 'IndexController',
    ['$scope', '$http', 'UserService', 'DataStructureFactory', 'DefinitionFactory', IndexController] );

    angular.module( 'DataStructureApp' )
    .controller( 'ChapterController',
    ['$scope', '$location', '$state', '$stateParams', 'UrlService', 'DataStructureFactory', 'DefinitionFactory', ChapterController] );

    angular.module( 'DataStructureApp' )
    .controller( 'DefinitionController',
    ['$scope', '$stateParams', DefinitionController] );

    angular.module( 'DataStructureApp' )
    .controller( 'SourceController',
    ['$scope', '$http', '$state', '$stateParams', SourceController] );

    angular.module( 'DataStructureApp' )
    .controller( 'ExampleController',
    ['$scope', '$stateParams', 'DummyService', ExampleController] );

})();
