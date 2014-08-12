function UrlService(){
    this.getLastWord = function( url ){
        var wordList = this.getWordList( url );

        if( wordList === null ){
            return '';
        }

        return wordList[wordList.length - 1];
    };

    this.getBeforeTheLastWord = function( url ){
        var wordList = this.getWordList( url );

        if( wordList === null || wordList.length < 2 ){
            return '';
        }

        return wordList[wordList.length - 2];
    };

    this.getWordList = function( url ){
        if( url === null || url === undefined ){
            return null;
        }

        return url.split( '/' );
    };
}
