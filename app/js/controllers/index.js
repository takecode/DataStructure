/*jshint unused:false */

function IndexController( $scope, $http, UserService, DataStructureFactory, DefinitionFactory ){
    $http.get('json/Users.json').success(function(data) {
        $scope.users = data;
        // Initial User.
        UserService.setUser( $scope.users[0] );
        $scope.user = UserService.getUser();
    });

    $scope.$watch( 'user', function(){
        UserService.setUser( $scope.user );
    });

    $http.get('json/DataStructures.json').success(function(data) {
        DataStructureFactory.list = data;
        $scope.dataStructures = DataStructureFactory.list;
    });

    $http.get('json/Definition.json').success(function(data) {
        DefinitionFactory.list = data;
    });
}
