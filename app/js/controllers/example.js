/*jshint unused:false */

function ExampleController( $scope, $stateParams, UserSerivce, DummyService ){
    var initialize = function(){
        $scope.$parent.subChapterId = $stateParams.subChapterId;
        $scope.$parent.contentType = 'example';
        $scope.userExample = UserService.getUser();
        console.log( UserService.user );
    };

    initialize();
}
