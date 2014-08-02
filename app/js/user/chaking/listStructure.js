var Chaking = Chaking || {};

Chaking.ListStructure = function(){
    'use strict';

    var Node = Chaking.Node;
    var Iterator = Chaking.Iterator;
    this.firstNode = null;
    this.getBegin = function(){
        return new Iterator( this.firstNode );
    };
    this.getEnd = function(){
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
    };
    this.getAt = function(){
    };
    this.setAt = function(){
    };
};
