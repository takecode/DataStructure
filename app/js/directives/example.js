/*jshint unused:false */

function ExampleDirective( $compile ){
    return {
        restrict: 'A',
        replace: false,
        terminal: true,
        priority: 1000,
        link: function link( scope, element, attrs ) {
            var id = scope.subChapterId;

            element.attr( id + '-directive', 'haha' );
            element.removeAttr( 'example-directive' );

            $compile( element )( scope );
        }
    };
}
