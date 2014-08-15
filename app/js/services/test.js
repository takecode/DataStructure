/*jshint unused:false */

function TestService(){
    this.testIterator = function(){
        var Iterator = Chaking.Iterator;
        var iterator = new Iterator();
        iterator.setValue( 3 );
        //console.log( iterator.getValue() );
    };

    this.testChain = function(){
        var Chain = Chaking.Chain;
        var Node = Chaking.Node;

        var node = new Node( 3 );
        var node2 = new Node( 4 );
        var chain = new Chain();
        chain.put( node );
        chain.put( node2 );
        console.log( chain.getFirstNode().getValue() );
        console.log( chain.getFirstNode().getNext().getValue() );
        chain.removeNode( node2 );
        console.log( chain.getFirstNode().getValue() );
        //console.log( chain.getFirstNode().getNext().getValue() );
    };

    this.testUser = function(){
        var user = Chaking;
        var Node = user.Node;
        var node = new Node( 3 );
        var node2 = new Node( 4, node );
        console.log( node2.getNext().getValue() );

        user = Importre;
        Node = user.Node;
        node = new Node( 5 );
        node2 = new Node( 6, node );
        console.log( node2.getNext().getValue() );
    };

}
