/*jshint unused:false */

function ChapterController( $scope, $location, $stateParams, UrlService, DataStructureFactory, DefinitionFactory ){
    var dataStructures = DataStructureFactory.list;
    var definitions = DefinitionFactory.list;

    this.initialize = function(){
        for( var count in dataStructures ){
            var dataStructure = dataStructures[count];
            if( dataStructure.id === $stateParams.chapterId ){
                $scope.dataStructure = dataStructure;
                $scope.subs = dataStructure.subs;
            }
        }
    };

    $scope.$watch( 'subChapterId', function(){
        var count;
        for( count in definitions ){
            var chapter = definitions[count];
            if( chapter.id === $scope.subChapterId ){
                $scope.chapter = chapter;
                $scope.definitions = chapter.definitions;
            }
        }
        for( count in $scope.subs ){
            var sub = $scope.subs[count];
            if( sub.id === $scope.subChapterId ){
                $scope.hasCode = sub.hasCode;
            }
        }
    });

    $scope.$watch( 'content', function(){
        $scope.flagDefinition = false;
        $scope.flagSource = false;
        if( $scope.content === 'definition' ){
            $scope.flagDefinition = true;
        }
        else if( $scope.content === 'source' ){
            $scope.flagSource = true;
        }
    });

    $scope.getClass = function( theId ) {
        var path = $location.path();
        var id = UrlService.getLastWord( path );

        if( id === theId ){
            return 'btn-primary active';
        } else {
            return '';
        }
    };

    this.initialize();

}
