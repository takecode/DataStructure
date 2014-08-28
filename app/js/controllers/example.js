/*jshint unused:false */

function ExampleController( $scope, $stateParams, DummyService ){
    this.initialize = function(){
        $scope.$parent.subChapterId = $stateParams.subChapterId;
        $scope.$parent.contentType = 'example';
    };

    this.initialize();
}
