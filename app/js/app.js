/**
 * Created by YeongminCha on 2014. 08. 05..
 */

(function () {
    angular.module('DataStructureApp', ['ui.router']);

    angular
        .module( 'DataStructureApp' )
        .config( ['$stateProvider', '$urlRouterProvider', UiRouterConfig] );

    angular
        .module( 'DataStructureApp' )
        .factory( 'DataStructureFactory', ListFactory );

    angular
        .module( 'DataStructureApp' )
        .factory( 'DefinitionFactory', ListFactory );

    angular
        .module( 'DataStructureApp' )
        .service( 'StateService', StateService );

    angular
        .module( 'DataStructureApp' )
        .service( 'UrlService', UrlService );

    angular
        .module( 'DataStructureApp' )
        .service( 'TestService', TestService );

    angular
        .module( 'DataStructureApp' )
        .controller( 'IndexController',
            ['$scope', '$http', 'DataStructureFactory', 'DefinitionFactory', IndexController] );

    angular
        .module( 'DataStructureApp' )
        .controller( 'ChapterController',
            ['$scope', '$location', '$stateParams', 'UrlService', 'DataStructureFactory', 'DefinitionFactory', ChapterController] );

    angular
        .module( 'DataStructureApp' )
        .controller( 'DefinitionController',
            ['$scope', '$stateParams', DefinitionController] );

    angular
        .module( 'DataStructureApp' )
        .controller( 'SourceController',
            ['$scope', '$http', '$state', '$stateParams', SourceController] );
})();
