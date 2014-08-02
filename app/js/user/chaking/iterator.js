var Chaking = Chaking || {};

Chaking.Iterator = function( node ){
    'use strict';

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
};
