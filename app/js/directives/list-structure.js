/*jshint unused:false */

function ListStructureDirective(){
    return {
        restrict: 'A',
        templateUrl: 'html/custom/listStructureTemplate.html',
        controller: function( $scope, UserService, DummyService ){
            $scope.dataStructure = UserService.rootClass.ListStructure;
            $scope.user = UserService.user;
            $scope.message = 'id:' + $scope.user.id;

            $scope.dummyList = DummyService.getDummyList( $scope.dataStructure );
            $scope.refresh = function(){
                $scope.nodeArray = [];
                var iterator = $scope.dummyList.getBegin();
                while( iterator.isExist() ){
                    $scope.nodeArray.push( iterator.getNode() );
                    iterator.moveNext();
                }
            };
            $scope.refresh();

            $scope.addRandom = function(){
                $scope.dummyList.prepend( DummyService.getDummyValue() );
                $scope.refresh();
            };
        }
    };
}
