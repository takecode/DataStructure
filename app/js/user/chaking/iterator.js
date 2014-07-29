var Chaking = Chaking || {};

Chaking.Iterator = function(){
    'use strict';

    this.next = null;
    this.getValue = function(){
        return this.value;
    };
    this.setValue = function( value ){
        this.value = value;
    };
    this.moveNext = function(){
    };
    this.isEqual = function( iterator ){
        if( this === iterator ){
            return true;
        }
        else{
            return false;
        }
    };
};
