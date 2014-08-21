/*jshint unused:false */

function DummyService(){
    this.getDummyList = function( List, size ){
        if( typeof size === 'undefined' ){ size = 10; }
        var list = new List();
        var MAX = size * 10;
        for( var i = 0; i < size; i++ ){
            list.prepend( Math.floor((Math.random() * MAX) + 1) );
        }

        return list;
    }

    this.getDummyList = function( List ){
        var list = new List();
        list.prepend( 15 );
        list.prepend( 3 );
        list.prepend( 27 );
        list.prepend( 4 );
        list.prepend( 1 );
        list.prepend( 12 );

        return list;
    }
}
