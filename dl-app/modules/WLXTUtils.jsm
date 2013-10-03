var EXPORTED_SYMBOLS = ["WLXTUtils"];

var WLXTUtils = {

    /*
     * nsIFile for the download directory
     */
    dlDir : null,

    ClassHelper : function() {
        /*
         * download directory for this
         * particular class
         */
        this.dir = null;
    },

    /*
     * saves download meta info
     * for each class, contains
     * ClassHelper
     */
    dlHelper : {},

};

