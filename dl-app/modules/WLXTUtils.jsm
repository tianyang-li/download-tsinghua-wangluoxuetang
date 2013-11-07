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

        /*
         * 课程文件
         */
        this.kcwjDir = null;

        /*
         * 课程作业
         */
        this.kczyDir = null;
    },

    /*
     * saves download meta info
     * for each class, contains
     * ClassHelper
     */
    dlHelper : {},

    /*
     * stores a list of course to download
     */
    courseList : null,
    courseListInd : null,

    downloadClassPage : 0,

    kcggList : null,
    kcggListInd : null,

    kcwjList : null,
    kcwjListInd : null,

    // Obtain the privacy context of the browser window that the URL
    // we are downloading comes from. If, and only if, the URL is not
    // related to a window, null should be used instead.
    //var privacy = PrivateBrowsingUtils.privacyContextFromWindow(urlSourceWindow);
    kcwjListWin : null,

    kczyList : null,
    kczyListInd : null,

};

