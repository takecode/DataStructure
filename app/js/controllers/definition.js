/*jshint unused:false */

function DefinitionController( $scope, $stateParams ){
    this.initialize = function(){
        $scope.$parent.subChapterId = $stateParams.subChapterId;
        $scope.$parent.content = 'definition';
    };

    this.initialize();
}
