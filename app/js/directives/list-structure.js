/*jshint unused:false */

function ListStructureDirective(){
    return {
        restrict: 'A',
        templateUrl: 'html/custom/listStructureTemplate.html',
        controller: function( $scope, DummyService ){
            $scope.myMessage = 'haha';

            $scope.dummyList = DummyService.getDummyList( Chaking.ListStructure );
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
            }

        }
    };
}