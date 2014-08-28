/*jshint unused:false */

function DummyService(){
    this.size = 10;
    this.MAX = this.size * 10;
    this.getDummyList = function( List, size ){
        if( typeof size !== 'undefined' ){ this.size = size; }
        var list = new List();
        for( var i = 0; i < this.size; i++ ){
            list.prepend( Math.floor((Math.random() * this.MAX) + 1) );
        }

        return list;
    };

    this.getDummyList = function( List ){
        var list = new List();
        list.prepend( 15 );
        list.prepend( 3 );
        list.prepend( 27 );
        list.prepend( 4 );
        list.prepend( 1 );
        list.prepend( 12 );

        return list;
    };

    this.getDummyValue = function(){
        return Math.floor((Math.random() * this.MAX) + 1);
    }
}
