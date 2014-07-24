'use strict';

var Importre = Importre || {};

Importre.Node = function( value, nextNode ){
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
