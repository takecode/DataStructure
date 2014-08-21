/*jshint unused:false */

function ChapterController( $scope, $location, $state, $stateParams, UrlService, DataStructureFactory, DefinitionFactory ){
    var dataStructures = DataStructureFactory.list;
    var definitions = DefinitionFactory.list;

    this.initialize = function(){
        for( var count in dataStructures ){
            var dataStructure = dataStructures[count];
            if( dataStructure.id === $stateParams.chapterId ){
                $scope.subs = dataStructure.subs;
            }
        }
        if( typeof $scope.contentType=== 'undefined' ){
            $scope.contentType = 'definition';
        }
        if( typeof $scope.subChapterId === 'undefined' ){
            $scope.subChapterId = $scope.subs[0].id;
        }
    };

    $scope.$watch( 'subChapterId', function(){
        $state.go( 'chapter.' + $scope.contentType, {'subChapterId': $scope.subChapterId} );
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

    $scope.$watch( 'contentType', function(){
        $scope.flagDefinition = false;
        $scope.flagSource = false;
        if( $scope.contentType === 'definition' ){
            $scope.flagDefinition = true;
        }
        else if( $scope.contentType === 'source' ){
            $scope.flagSource = true;
        }
    });

    $scope.getContentClass = function( contentType ){
        if( $scope.contentType === contentType ){
            return 'bold';
        }
        else{
            return '';
        }
    }

    $scope.getClass = function( theId ) {
        var path = $location.path();
        var id = UrlService.getLastWord( path );

        if( id === theId ){
            return 'btn-primary active';
        } else {
            return '';
        }
    };

    $scope.selectChapter = function( theId ){
        $scope.subChapterId = theId;
    }

    this.initialize();
}
