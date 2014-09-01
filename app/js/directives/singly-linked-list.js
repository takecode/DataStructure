/*jshint unused:false */

function SinglyLinkedListDirective(){
    return {
        restrict: 'A',
        templateUrl: 'html/custom/listStructureTemplate.html',
        controller: function( $scope, DummyService ){
            this.dataStructure = $scope.user.rootClass.SinglyLinkedList;

            $scope.dummyList = DummyService.getDummyList( this.dataStructure );
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
