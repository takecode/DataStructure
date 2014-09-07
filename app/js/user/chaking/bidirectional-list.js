var Chaking = Chaking || {};

Chaking.BidirectionalList = function(){
    var Iterator = Chaking.BidirectionalList.Iterator;
    var Node = Chaking.BidirectionalList.Node;
    this.firstNode = null;
    this.lastNode = null;

    this.getBegin = function(){ // Run in O(1) time.
        return new Iterator( this.firstNode );
    };
    this.getEnd = function(){ // Run in O(1) time.
        return new Iterator( this.lastNode );
    };
    this.prepend = function( value ){ // Run in O(1) time.
        var node = new Node( value );
        if( this.firstNode === null ){
            this.firstNode = node;
            this.lastNode = node;
        }
        else{
            node.next = this.firstNode;
            this.firstNode.previous = node;
            this.firstNode = node;
        }
    };
    this.insert = function( iterator, value ){ // Run in O(1) time.
        var node = new Node( value );
        var nextNode = iterator.node;
        var previousNode = nextNode.previous;
        if( nextNode === this.firstNode ){
            this.prepend( value );
        }
        else{
            node.next = previousNode.next;
            previousNode.next = node;
            node.previous = nextNode.previous;
            nextNode.previous = node;
        }
    };
    this.remove = function( iterator ){ // Run in O(1) time.
        var node = iterator.node;
        if( node === this.firstNode && node === this.lastNode ){
            this.firstNode = null;
            this.lastNode = null;
        }
        else if( node === this.firstNode ){
            this.firstNode = this.firstNode.next;
        }
        else if( node === this.lastNode ){
            this.lastNode = this.lastNode.previous;
        }
        else{
            var previousNode = node.previous;
            var nextNode = node.next;
            previousNode.next = node.next;
            nextNode.previous = node.previous;
        }
    };
    this.isEmpty = function(){ // Run in O(1) time.
        if( this.firstNode === null ){
            return true;
        }
        else{
            return false;
        }
    };
    this.getSize = function(){ // Run in O(N) time.
        var iterator = this.getBegin();
        var count = 0;
        while( true ){
            if( iterator.isEmpty() ){ break; }

            count++;
            iterator.moveNext();
        }

        return count;
    };
    // Todo. check n in size.
    this.getNth = function( n ){ // Run in O(N) time.
        var iterator = this.getBegin();
        for( i = 0; i < n; i++ ){
            iterator.moveNext();
        }
        return iterator.getValue();
    };
    this.setNth = function( n, value ){ // Run in O(N) time.
        var iterator = this.getBegin();
        for( i = 0; i < n; i++ ){
            iterator.moveNext();
        }
        iterator.setValue( value );
    };
};

// All operation run in O(1) time.
Chaking.BidirectionalList.Iterator = function( node ){
    var Node = Chaking.BidirectionalList.Node;
    this.node = node;

    this.getValue = function(){
        return this.node.value;
    }
    this.setValue = function( value ){
        this.node.value = value;
    }
    this.moveNext = function(){
        if( this.node.next !== null ){
            this.node = this.node.next;
            return true;
        }
        else{
            return false;
        }
    }
    this.movePrevious = function(){
        if( this.node.previous !== null ){
            this.node = this.node.previous;
            return true;
        }
        else{
            return false;
        }
    }
    this.isEqual = function( iterator ){
        if( this.node === iterator.node ){ return true; }
        else{ return false; }
    }
    this.isEmpty = function(){
        if( this.node === null ){ return true; }
        else{ return false; }
    }
};

Chaking.BidirectionalList.Node = function( value, next, previous ){
    this.previous = null;
    this.next = null;
    this.value = value;

    if( typeof next !== 'undefined' ){ this.next = next; }
    if( typeof previous !== 'undefined' ){ this.previous = previous; }
};
