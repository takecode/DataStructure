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

var Chaking = Chaking || {};

Chaking.Chain = function(){
    this.firstNode = null;

    this.put = function( node ){
        if( this.firstNode === null ){
            this.firstNode = node;
        }
        else{
            node.setNext( this.firstNode );
            this.firstNode = node;
        }
    };

    this.getFirstNode = function(){
        return this.firstNode;
    };

    this.removeNode = function( node ){
        var previousNode = null;
        var thisNode = this.firstNode;

        while( true ){
            if( thisNode === null ){
                break;
            }
            if( thisNode === node ){
                if( previousNode === null ){
                    this.firstNode = this.firstNode.getNext();
                }
                else{
                    previousNode.setNext( thisNode.getNext() );
                }
                break;
            }
            previousNode = thisNode;
            thisNode = thisNode.getNext();
        }
    };
};

var Chaking = Chaking || {};

Chaking.ListStructure = function(){
    var Node = Chaking.Node;
    var Iterator = Chaking.ListStructure.Iterator;
    this.firstNode = null;
    this.getBegin = function(){
        return new Iterator( this.firstNode );
    };
    this.getEnd = function(){
        var lastNode = this.firstNode;
        if( lastNode !== null ){
            while( true ){
                if( lastNode.getNext() === null ){ break; }
            }
        }
        return new Iterator( lastNode );
    };
    this.prepend = function( value ){
        var node = new Node( value );
        if( this.firstNode === null ){
            this.firstNode = this.lastNode = node;
        }
        else{
            node.setNext( this.firstNode );
            this.firstNode = node;
        }
    };
    this.insertAfter = function( iterator, value ){
        var thatNode = iterator.getNode();
        var node = new Node( value );
        node.setNext( thatNode.getNext() );
        thatNode.setNext( node );
    };
    this.removeFirst = function(){
        if( this.firstNode !== null ){
            //var node = this.firstNode;
            this.firstNode = this.firstNode.getNext();
        }
    };
    this.removeAfter = function( iterator ){
        var thisNode = iterator.getNode();
        var nextNode = thisNode.getNext();
        if( nextNode !== null ){
            thisNode.setNext( nextNode.getNext() );
        }
    };
    this.isEmpty = function(){
        if( this.firstNode === null ){
            return true;
        }
        else{
            return false;
        }
    };
    this.getSize = function(){
        if( this.isEmpty() ){ return 0; }

        var iterator = this.getBegin();
        var lastIterator = this.getEnd();
        var count = 0;
        while( true ){
            if( iterator.isEqual( lastIterator ) ){ break; }
            count++;
            iterator.moveNext();
        }
        return count;
    };
    this.getAt = function(){
    };
    this.setAt = function(){
    };
};

Chaking.ListStructure.Iterator = function( node ){
    var Node = Chaking.Node;
    if( typeof node === 'undefined' ){
        this.node = null;
    }
    else{
        this.node = node;
    }

    this.getValue = function(){
        if( this.node === null ){
            return null;
        }
        else{
            return this.node.getValue();
        }
    };
    this.setValue = function( value ){
        if( this.node === null ){
            this.node = new Node( value );
        }
        else{
            this.node.setValue( value );
        }
    };
    this.moveNext = function(){
        if( this.node !== null ){
            this.node = this.node.getNext();
        }
    };
    // TODO: Need To be tested.
    this.isEqual = function( iterator ){
        if( this.node === iterator.getNode() ){
            return true;
        }
        else{
            return false;
        }
    };
    this.setNode = function( node ){
        this.node = node;
    };
    this.getNode = function(){
        return this.node;
    };
    this.isExist = function(){
        if( this.node === null ){ return false; }
        else{ return true; }
    };
};

var Chaking = Chaking || {};

Chaking.Node = function( value, nextNode ){
    this.value = value;
    if( typeof nextNode !== 'undefined' ){
        this.nextNode = nextNode;
    }
    else{
        this.nextNode = null;
    }

    this.getNext = function(){
        return this.nextNode;
    };
    this.setNext = function( nextNode ){
        this.nextNode = nextNode;
    };
    this.getValue = function(){
        return this.value;
    };
    this.setValue = function( value ){
        this.value = value;
    };
};

// Same as list structure.

var Chaking = Chaking || {};

Chaking.SinglyLinkedList = function(){
    var Node = Chaking.Node;
    var Iterator = Chaking.SinglyLinkedListIterator;
    this.firstNode = null;
    this.getBegin = function(){
        return new Iterator( this.firstNode );
    };
    this.getEnd = function(){
        var lastNode = this.firstNode;
        if( lastNode !== null ){
            while( true ){
                if( lastNode.getNext() === null ){ break; }
            }
        }
        return new Iterator( lastNode );
    };
    this.prepend = function( value ){
        var node = new Node( value );
        if( this.firstNode === null ){
            this.firstNode = this.lastNode = node;
        }
        else{
            node.setNext( this.firstNode );
            this.firstNode = node;
        }
    };
    this.insertAfter = function( iterator, value ){
        var thatNode = iterator.getNode();
        var node = new Node( value );
        node.setNext( thatNode.getNext() );
        thatNode.setNext( node );
    };
    this.removeFirst = function(){
        if( this.firstNode !== null ){
            //var node = this.firstNode;
            this.firstNode = this.firstNode.getNext();
        }
    };
    this.removeAfter = function( iterator ){
        var thisNode = iterator.getNode();
        var nextNode = thisNode.getNext();
        if( nextNode !== null ){
            thisNode.setNext( nextNode.getNext() );
        }
    };
    this.isEmpty = function(){
        if( this.firstNode === null ){
            return true;
        }
        else{
            return false;
        }
    };
    this.getSize = function(){
        if( this.isEmpty() ){ return 0; }

        var iterator = this.getBegin();
        var lastIterator = this.getEnd();
        var count = 0;
        while( true ){
            if( iterator.isEqual( lastIterator ) ){ break; }
            count++;
            iterator.moveNext();
        }
        return count;
    };
    this.getAt = function(){
    };
    this.setAt = function(){
    };
};

Chaking.SinglyLinkedListIterator = function( node ){
    var Node = Chaking.Node;
    if( typeof node === 'undefined' ){
        this.node = null;
    }
    else{
        this.node = node;
    }

    this.getValue = function(){
        if( this.node === null ){
            return null;
        }
        else{
            return this.node.getValue();
        }
    };
    this.setValue = function( value ){
        if( this.node === null ){
            this.node = new Node( value );
        }
        else{
            this.node.setValue( value );
        }
    };
    this.moveNext = function(){
        if( this.node !== null ){
            this.node = this.node.getNext();
        }
    };
    // TODO: Need To be tested.
    this.isEqual = function( iterator ){
        if( this.node === iterator.getNode() ){
            return true;
        }
        else{
            return false;
        }
    };
    this.setNode = function( node ){
        this.node = node;
    };
    this.getNode = function(){
        return this.node;
    };
    this.isExist = function(){
        if( this.node === null ){ return false; }
        else{ return true; }
    };
};

var Chaking = Chaking || {};

// Not Good For JavaScript.
// Vector is same as JavaScript Array.

var Importre = Importre || {};

Importre.Node = function( value, nextNode ){
    'use strict';

    this.nextNode = nextNode;
    this.value = value;
    this.getNext = function(){
        return this.nextNode;
    };
    this.getValue = function(){
        return this.value;
    };
    this.setNext = function( nextNode ){
        this.nextNode = nextNode;
    };
    this.setValue = function( value ){
        this.value = value;
    };
};
