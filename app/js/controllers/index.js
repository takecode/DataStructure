function IndexController( $scope, $http, DataStructureFactory, DefinitionFactory ){
    'use strict';

    $http.get('json/Users.json').success(function(data) {
        $scope.users = data;
        $scope.user = $scope.users[0];
    });

    $http.get('json/DataStructures.json').success(function(data) {
        DataStructureFactory.list = data;
        $scope.dataStructures = DataStructureFactory.list;
    });

    $http.get('json/Definition.json').success(function(data) {
        DefinitionFactory.list = data;
    });
}
