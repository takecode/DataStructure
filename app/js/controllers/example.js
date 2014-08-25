/*jshint unused:false */

function ExampleController( $scope, $stateParams, DummyService ){
    this.initialize = function(){
        $scope.$parent.subChapterId = $stateParams.subChapterId;
        $scope.$parent.contentType = 'example';

        this.dummyList = DummyService.getDummyList( Chaking.ListStructure );
        $scope.listArray = [];
        this.refresh();
    };

    this.refresh = function(){
        var iterator = this.dummyList.getBegin();
        while( iterator.isExist() ){
            $scope.listArray.push( iterator.getNode() );
            iterator.moveNext();
        }
    }

    this.initialize();
}
