// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var num = 0;
    var appData = Windows.Storage.ApplicationData.current;
    var roamingSettings = appData.roamingSettings;
    var Age = thinkitdrinkitDataClient.getTable("Func");
    var keepInfo = true;
    var the_sel_func;

    WinJS.UI.Pages.define("/pages/func/func.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            WinJS.Binding.processAll(element, age_data.model);
            design.getFunc();
            design.changeTextColor();
            var the_sel_func = roamingSettings.values["Age_name"];
            document.getElementById("choosen_age").textContent = "Whats your " + roamingSettings.values["Age_name"] + " Goal.";
            document.getElementById("home").removeAttribute("hidden");
            //document.getElementById("age_p").textContent = the_sel_func;
            //document.getElementById("func_price").removeAttribute("hidden");

                //milo: footer history 
                if (roamingSettings.values["Cat_picked"] === "Nutritional") {
                    document.getElementById("age_pic").src = roamingSettings.values["Cat_picked_img"];
                }
                //milo: footer history 
                if (roamingSettings.values["Cat_picked"] === "Protein") {
                    document.getElementById("age_pic").src = roamingSettings.values["Cat_picked_img2"];
                }
                //milo: footer history 
                document.getElementById("age_p").textContent = roamingSettings.values["Cat_picked"];
                document.getElementById("home_pic").src = roamingSettings.values["Age_pic"];
                document.getElementById("home_p").textContent = roamingSettings.values["Age_name"];
                document.getElementById("home_pic").src = roamingSettings.values["Age_pic"];
                document.getElementById("where_you_are1").textContent = "You have choosen the " + roamingSettings.values["Age_name"] + " Goal." + " You have 3 steps left.";

                server.func(the_sel_func);

                ////milo: popup testing with webview inside it 
                //runAnimation.addEventListener("click", togglePopupUI, false);

                //var webviewControl = document.getElementById("webview");
                //webviewControl.addEventListener("MSWebViewNavigationStarting", navigationStarting);
                //webviewControl.addEventListener("MSWebViewDOMContentLoaded", domContentLoaded);
                //webviewControl.navigate(new Windows.Foundation.Uri("http://storeapp.thinkitdrinkit.com/soccer-supplements/"));

                //function navigationStarting() {
                //    updateNavigatingState(true);
                //}

                //function updateNavigatingState(isNavigating) {
                //    document.getElementById("progressRing").style.visibility = (isNavigating ? "visible" : "hidden");
                //}

                //function domContentLoaded(e) {
                //    var link_current = e.uri;
                //    updateNavigatingState(false);
                //}

                //$('#webview').width('650').height('440');

                //roamingSettings.values["Item_choosen"] = "";
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
            //using the removeInfo.js file to delete the last object of the array as long as an item exists
            remove.pop_list(age_data.model.func);
            //milo: removing keepInfo data when back button is used from func page.
            remove.pop_list(age_data.model.info_page2)
            if (keepInfo === false) {
                remove.pop_list(age_data.model.info_page2_func);
            } 
        },

        updateLayout: function (element) {
            // TODO: Respond to changes in layout.
        }
    });

    ////milo: popup testing with webview  
    //function togglePopupUI() {
    //    if (runAnimation.innerHTML === "Show pop-up") {
    //        // Set desired final opacity on the UI element.
    //        myPopupUI.style.opacity = "1";

    //        // Run show popup animation
    //        WinJS.UI.Animation.showPopup(myPopupUI, null);

    //        runAnimation.innerHTML = "Hide pop-up";
    //    } else {
    //        // Set desired final opacity on the UI element.
    //        myPopupUI.style.opacity = "0";

    //        // Run show popup animation
    //        WinJS.UI.Animation.hidePopup(myPopupUI);

    //        runAnimation.innerHTML = "Show pop-up";
    //    }
    //}

    var func3 = "";
    WinJS.Namespace.define("func_clicked", {

        clicked: function (func) {
            remove.pop_list(age_data.model.info_page2_func);
            var updated_func = func.replace(/^\s+/, '').replace(/\s+$/, '');
            func3 = updated_func;
            server.func_sub(updated_func);
        },

        next_page_flavor: function () {
            keepInfo = false;
            WinJS.Navigation.navigate('pages/base/base.html')
            roamingSettings.values["Func_name"] = func3;
            roamingSettings.values["Func_pic"] = document.getElementById("choosen_func_carry").src;
            roamingSettings.values["Func_info"] = document.getElementById("sel_func_info").textContent;
            roamingSettings.values["Func_price"] = document.getElementById("func_price").textContent;
            roamingSettings.values["Func_label"] = document.getElementById("sel_func_pic").src;
        },

        more_info: function (clicked) {
            roamingSettings.values["Item_choosen"] = clicked;
            roamingSettings.values["Clicked_cat"] = "func";
            WinJS.Navigation.navigate('pages/item_info/item_info.html');
            keepInfo = true;
        }
    })

})();
