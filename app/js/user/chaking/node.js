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
