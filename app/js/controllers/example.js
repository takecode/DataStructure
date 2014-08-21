/*jshint unused:false */

function ExampleController( $scope, $stateParams, DummyService ){
    this.initialize = function(){
        $scope.$parent.subChapterId = $stateParams.subChapterId;
        $scope.$parent.contentType = 'example';

        var dummyList = DummyService.getDummyList( Chaking.ListStructure );
        var iterator = dummyList.getBegin();

        $scope.listArray = [];
        dummyList.removeFirst();
        while( iterator.isExist() ){
            $scope.listArray.push( iterator.getNode() );
            iterator.moveNext();
        }
    };

    this.initialize();
}
