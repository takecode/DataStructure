/*jshint unused:false */

function ListStructureDirective(){
    return {
        restrict: 'A',
        templateUrl: 'html/custom/listStructureTemplate.html',
        controller: function( $scope, UserService, DummyService ){
            $scope.refresh = function(){
                var dataStructure = UserService.rootClass.ListStructure;
                $scope.nodeArray = [];
                if( typeof dataStructure !== 'undefined'){
                    var dummyList = DummyService.getDummyList( dataStructure );
                    var iterator = dummyList.getBegin();
                    while( iterator.isExist() ){
                        $scope.nodeArray.push( iterator.getNode() );
                        iterator.moveNext();
                    }
                }
            };

            $scope.$watch( 'user', function(){
                $scope.refresh();
            });

            $scope.addRandom = function(){
                $scope.dummyList.prepend( DummyService.getDummyValue() );
                $scope.refresh();
            };
        }
    };
}
