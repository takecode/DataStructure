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
