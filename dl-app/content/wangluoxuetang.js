if ("undefined" == typeof (WLXT)) {
    var WLXT = {};
};

WLXT.DowloadData = {

    /*
     * refers to browser window opening WLXT
     */
    learnWindow : null,

};

WLXT.DowloadData.onPageLoad = function(aEvent) {
    WLXT.DowloadData.handlePageLoad();
};

WLXT.DowloadData.handlePageLoad = function() {
    alert(WLXT.DowloadData.learnWindow);
};

WLXT.DowloadData.init = function() {
    if (gBrowser) {
        gBrowser.addEventListener("DOMContentLoaded", WLXT.DowloadData.onPageLoad, false);
    }
};

/*
 * change DOM of WLXT login page
 */
WLXT.DowloadData.modifyLearnLogin = function() {
    if (WLXT.DowloadData.learnWindow) {
        var loginTableBody = WLXT.DowloadData.learnWindow.document.getElementsByTagName('body')[0].getElementsByTagName('table')[4].getElementsByTagName('tbody')[0];
        var notifyUserCell = loginTableBody.insertRow(0).insertCell(0);
        notifyUserCell.innerHTML = '<b style="color: red">下载网络学堂从这里登录</b>';
    }
};

/*
 * open learn.tsinghua.edu.cn in a new window
 */
WLXT.DowloadData.openLearn = function() {
    var strWindowFeatures = "";
    WLXT.DowloadData.learnWindow = window.open("http://learn.tsinghua.edu.cn", "wlxt_dl_window", strWindowFeatures);
};

WLXT.BrowserOverlay = {

    seekHelp : function(aEvent) {
        window.openDialog("chrome://wangluoxuetang/content/seekHelp.xul", "wlxt-seek-help", "chrome,centerscreen");
    },

    feedback : function(aEvent) {
        window.openDialog("chrome://wangluoxuetang/content/feedback.xul", "wlxt-feedback", "chrome,centerscreen");
    },

    startDownload : function(aEvent) {
        WLXT.DowloadData.openLearn();
    }
};

window.addEventListener("load", function load(event) {
    window.removeEventListener("load", load, false);
    //remove listener, no longer needed
    WLXT.DowloadData.init();
}, false);
