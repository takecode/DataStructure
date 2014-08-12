function SourceController( $scope, $http, $state, $stateParams ){
    $scope.initialize = function(){
        $scope.$parent.subChapterId = $stateParams.subChapterId;
        $scope.$parent.content = 'source';

        var url = 'js/user/' + $scope.user.id + '/' + $scope.subChapterId + '.js';

        $http.get(url).success(function(data) {
            $scope.sourceText = data;
        })
        .error( function(){
            $scope.sourceText = 'Not yet.';
        });
    };

    $scope.$watch( 'user', function(){
        $scope.initialize();
    });

    $scope.initialize();
};
