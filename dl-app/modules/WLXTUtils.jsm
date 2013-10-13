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

        /*
         * 课程公告
         */
        this.kcggDir = null;
    },

    /*
     * saves download meta info
     * for each class, contains
     * ClassHelper
     */
    dlHelper : {},

    /*
     * used to only allow one class to download at a time
     */
    flag0 : 0,

    /*
     * one level above flag0
     */
    flag1 : 0,
};

