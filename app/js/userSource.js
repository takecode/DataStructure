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
    var Iterator = Chaking.Iterator;
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
            var node = this.firstNode;
            this.firstNode = this.firstNode.getNext();
            delete node;
        }
    };
    this.removeAfter = function( iterator ){
        var thisNode = iterator.getNode();
        var nextNode = thisNode.getNext();
        if( nextNode !== null ){
            thisNode.setNext( nextNode.getNext() );
            delete nextNode;
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

Chaking.Iterator = function( node ){
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
