/*jshint unused:false */

function IndexController( $scope, $http, DataStructureFactory, DefinitionFactory ){
    $http.get('json/Users.json').success(function(data) {
        $scope.users = data;
        // Initial User.
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
