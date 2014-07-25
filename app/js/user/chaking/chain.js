var Chaking = Chaking || {};

Chaking.Chain = function(){
    'use strict';

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
