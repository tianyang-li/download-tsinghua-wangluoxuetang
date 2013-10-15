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
    //XXX: fix busy waitng getting stuck
    /*
     * used to only allow one class to download at a time
     */
    falg0 : 0, // course window
    turn0 : 0, // 1 when downloading

    /*
     * one level above flag0
     */
    flag1 : 0,
    turn1 : 0,

    /*
     * one level above flag1
     */
    flag2 : 0,
    turn2 : 0,
};

