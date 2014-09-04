/*jshint unused:false */

function UserService(){
    this.user = null;
    this.rootClass = null;
    this.setUser = function( user ){
        this.user = user;
        
        if( typeof user !== 'undefined' ){
            switch( user.id ){
                case 'chaking':
                    this.rootClass = Chaking;
                    break;
                case 'importre':
                    this.rootClass = Importre;
                    break;
            }
        }

    }

    this.getUser = function(){
        return this.user;
    }
}
