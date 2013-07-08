if ("undefined" == typeof (WLXT)) {
    var WLXT = {};
};

WLXT.DowloadData = {

    /*
     * refers to browser window opening WLXT
     */
    learnWindow : null,
};

/*
 * open learn.tsinghua.edu.cn in a new window
 */
WLXT.DowloadData.openLearn = function() {
    var strWindowFeatures = ""
    this.learnWindow = window.open("http://learn.tsinghua.edu.cn", "wlxt_dl_window", strWindowFeatures);
};

/*
 * change DOM of WLXT login page
 */
WLXT.DowloadData.modifyLearnLogin = function() {
    if (this.learnWindow == null) {
        alert(1);
    }
    var loginTableBody = this.learnWindow.document.getElementsByTagName('body')[0].getElementsByTagName('table')[4].getElementsByTagName('tbody')[0];
    var notifyUserCell = loginTableBody.insertRow(0).insertCell(0);
    notifyUserCell.innerHTML = '<b style="color: red">下载网络学堂从这里登录</b>';

};

WLXT.BrowserOverlay = {

    seekHelp : function(aEvent) {
        window.open("chrome://wangluoxuetang/content/seekHelp.xul", "wlxt-seek-help", "chrome,centerscreen");
    },

    feedback : function(aEvent) {
        window.open("chrome://wangluoxuetang/content/feedback.xul", "wlxt-feedback", "chrome,centerscreen");
    },

    startDownload : function(aEvent) {
        WLXT.DowloadData.openLearn();
        WLXT.DowloadData.modifyLearnLogin();
    }
};
