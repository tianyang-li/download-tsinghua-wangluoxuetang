if ("undefined" == typeof (WLXT)) {
    var WLXT = {};
};

WLXT.BrowserOverlay = {

    seekHelp : function(aEvent) { let
        stringBundle = document.getElementById("wlxt-string-bundle"); let
        message = stringBundle.getString("wlxt.seek_help.label");

        window.alert(message);
        /*
         * TODO: make this into a dialog
         */
    }
};
