/*jshint unused:false */

function BidirectionalListDirective(){
    return {
        restrict: 'A',
        templateUrl: 'html/custom/bidirectionalListTemplate.html',
        controller: function( $scope, UserService, DummyService ){
            $scope.refresh = function(){
                var dataStructure = UserService.rootClass.BidirectionalList;
                var list = new dataStructure();
                list.prepend( 3 );
                list.prepend( 6 );
                var iterator = list.getBegin();
                iterator.moveNext();
                list.insert( iterator, 4 );
                console.log( list );
            };

            $scope.$watch( 'user', function(){
                $scope.refresh();
            });

        }
    };
}
