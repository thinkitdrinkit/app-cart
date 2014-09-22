// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    var appData = Windows.Storage.ApplicationData.current;
    var roamingSettings = appData.roamingSettings;
    var test1 = "";

    WinJS.UI.Pages.define("/pages/supl_sport_item_info/supl_sport_item_info.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            //WinJS.Binding.processAll(element, age_data.model);
            design.getSport_info();

            design.changeTextColor();
            var updated_name = roamingSettings.values["Item_choosen"].replace(/^\s+/, '').replace(/\s+$/, '');
            document.getElementById("item_name").textContent = "Information on " + updated_name + ".";

            server.sport_info(updated_name);

            // Create a URI describing the site to navigate to
            //var siteUrl = new Windows.Foundation.Uri("http://storeapp.thinkitdrinkit.com/soccer-supplements/");
            //// Specify the type of request
            //var httpRequestMessage = new Windows.Web.Http.HttpRequestMessage(Windows.Web.Http.HttpMethod.get, siteUrl);
            //// Navigate the WebView with the request info
            //webview.navigateWithHttpRequestMessage(httpRequestMessage);

            if (updated_name === "Soccer") {
                //milo: WEBVIEW STUFF COMING FROM WORDPRESS AND IS REFRESHING MAYBE EVERY 10 MINUTES (SO IF YOU CHANGE IN WORDPRESS IT TAKES THAT LONG, BEST WAY UNISTALL APP FROM START WINDOW IN WINDOWS 8.1)
                var webviewControl = document.getElementById("webview");
                webviewControl.addEventListener("MSWebViewNavigationStarting", navigationStarting);
                webviewControl.addEventListener("MSWebViewDOMContentLoaded", domContentLoaded);
                webviewControl.navigate(new Windows.Foundation.Uri("http://storeapp.thinkitdrinkit.com/soccer-supplements/"));

                var webviewControl2 = document.getElementById("webview2");
                webviewControl2.addEventListener("MSWebViewNavigationStarting", navigationStarting);
                webviewControl2.addEventListener("MSWebViewDOMContentLoaded", domContentLoaded);
                webviewControl2.navigate(new Windows.Foundation.Uri("http://storeapp.thinkitdrinkit.com/soccer-supplements/soccer-ephys/"));
            }

            if (updated_name === "Football") {
                //milo: WEBVIEW STUFF COMING FROM WORDPRESS AND IS REFRESHING MAYBE EVERY 10 MINUTES (SO IF YOU CHANGE IN WORDPRESS IT TAKES THAT LONG, BEST WAY UNISTALL APP FROM START WINDOW IN WINDOWS 8.1)
                var webviewControl = document.getElementById("webview");
                webviewControl.addEventListener("MSWebViewNavigationStarting", navigationStarting);
                webviewControl.addEventListener("MSWebViewDOMContentLoaded", domContentLoaded);
                webviewControl.navigate(new Windows.Foundation.Uri("http://storeapp.thinkitdrinkit.com/football-supplements/"));

                var webviewControl2 = document.getElementById("webview2");
                webviewControl2.addEventListener("MSWebViewNavigationStarting", navigationStarting);
                webviewControl2.addEventListener("MSWebViewDOMContentLoaded", domContentLoaded);
                webviewControl2.navigate(new Windows.Foundation.Uri("http://storeapp.thinkitdrinkit.com/football-supplements/"));
            }
            
            function navigationStarting() {
                updateNavigatingState(true);
            }

            function updateNavigatingState(isNavigating) {
                document.getElementById("progressRing").style.visibility = (isNavigating ? "visible" : "hidden");
            }

            function domContentLoaded(e) {
                var link_current = e.uri;
                updateNavigatingState(false);
            }

            //$('#sport_info2').width('960').height('550').css('overflow-y', 'auto');
            $('#webview').width('950').height('540');

            //$('#link_wrap_remove_stuff').width('560').height('550').css('overflow-y', 'auto');
            $('#webview2').width('550').height('540');

            document.getElementById("scroll_bar").removeAttribute("hidden");
            document.getElementById("scroll_bar").textContent = "SCROLL TO CONTINUE";

            document.getElementById("scroll_bar2").removeAttribute("hidden");
            document.getElementById("scroll_bar2").textContent = "SCROLL TO CONTINUE";
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.

            //milo:this helps with reapeating duplicates
            remove.pop_list(age_data.model.item_info_sport);
            remove.pop_list(age_data.model.info_sport);
        },

        updateLayout: function (element) {
            // TODO: Respond to changes in layout.
        }
    });


    WinJS.Namespace.define("webview_clicked", {

        clicked1: function () {
        
        },

    });

})();
