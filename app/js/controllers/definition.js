/*jshint unused:false */

function DefinitionController( $scope, $stateParams ){
    $scope.initialize = function(){
        $scope.$parent.subChapterId = $stateParams.subChapterId;
        $scope.$parent.content = 'definition';
    };

    $scope.initialize();
}
