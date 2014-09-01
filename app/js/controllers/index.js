/*jshint unused:false */

function IndexController( $scope, $http, DataStructureFactory, DefinitionFactory ){
    $http.get('json/Users.json').success(function(data) {
        $scope.users = data;
        // Initial User.
        $scope.user = $scope.users[0];
    });

    $scope.$watch( 'user', function(){
        if( typeof $scope.user !== 'undefined' ){
            switch( $scope.user.id ){
                case 'chaking':
                    $scope.user.rootClass = Chaking;
                    break;
                case 'importre':
                    $scope.user.rootClass = Importre;
                    break;
            }
        }
    });

    $http.get('json/DataStructures.json').success(function(data) {
        DataStructureFactory.list = data;
        $scope.dataStructures = DataStructureFactory.list;
    });

    $http.get('json/Definition.json').success(function(data) {
        DefinitionFactory.list = data;
    });
}
