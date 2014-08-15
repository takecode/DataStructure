/*jshint unused:false */

function StateService(){
    this.getFirstState = function( state ){
        var stateList = state.split( '.' );
        return stateList[0];
    };
}
