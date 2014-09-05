/*jshint unused:false */

function ExampleController( $scope, $stateParams, DummyService ){
    var initialize = function(){
        $scope.$parent.subChapterId = $stateParams.subChapterId;
        $scope.$parent.contentType = 'example';
    };

    initialize();
}
