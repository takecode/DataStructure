'use strict';

describe('Chaking Test', function() {
    it('Node & Chain Test', function() {
        var Node = Chaking.Node;
        var Chain = Chaking.Chain;
        var node1 = new Node( 3 );
        var node2 = new Node( 4 );
        var chain = new Chain();
        chain.put( node1 );
        chain.put( node2 );
        expect( chain.getFirstNode().getNext().getValue() ).toBe( 3 );
    });
});

describe( 'Iterator Test', function(){
    var Iterator = Chaking.Iterator;
    var Node = Chaking.Node;
    var nodeArray = [];

    beforeEach( function(){
        for( var i = 0; i < 10; i++ ){
            nodeArray[i] = new Node( i );
        }
    });

    it( 'Constructor', function(){
        var iterator = new Iterator();
        expect( iterator.getValue() ).toBe( null );
        iterator = new Iterator( nodeArray[2] );
        expect( iterator.getValue() ).toBe( 2 );
    });

    it( 'value test', function(){
        var iterator = new Iterator();
        iterator.setValue( 3 );
        expect( iterator.getValue() ).toBe( 3 );
        iterator.setValue( 'haha' );
        expect( iterator.getValue() ).toBe( 'haha' );
    });

    it( 'isEqual test', function(){
        var iterator = new Iterator( nodeArray[0] );
        var node = new Node( 0 );
        var iterator2 = new Iterator( node );
        expect( iterator.getValue() ).toBe( iterator2.getValue() );
        expect( iterator.isEqual( iterator2 ) ).toBe( false );
    });
});

describe( 'ListStructure Test', function(){
    var ListStructure = Chaking.ListStructure;

    it( 'Constructor', function(){
        var listStructure = new ListStructure();
        listStructure.prepend( 3 );
        listStructure.prepend( 4 );
        var iterator = listStructure.getBegin();
        expect( iterator.getValue() ).toBe( 4 );
        iterator.moveNext();
        expect( iterator.getValue() ).toBe( 3 );
    });
});
