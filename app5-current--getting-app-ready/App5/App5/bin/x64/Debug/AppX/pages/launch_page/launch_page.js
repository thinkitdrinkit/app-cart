// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    var appData = Windows.Storage.ApplicationData.current;
    var roamingSettings = appData.roamingSettings;

    WinJS.UI.Pages.define("/pages/launch_page/launch_page.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

  
            design.launch();
            design.changeTextColor();
            document.getElementById("make_drink").style.borderColor = "white";
            document.getElementById("learn_more").style.borderColor = "white";
            document.getElementById("supl_sport").style.borderColor = "white";
            document.getElementById("make_drink2").style.borderColor = "white";
            document.getElementById("nutrigenetics").style.borderColor = "white";
            document.getElementById("company_name").textContent = "Let's Customize";
            document.getElementById("appBar").winControl.show();
            document.getElementById("more_info_home").setAttribute("hidden", true);
            document.getElementById("shop").setAttribute("hidden", true);
            document.getElementById("home").setAttribute("hidden", true);

            roamingSettings.values["Clicked_cat"] = "",
            roamingSettings.values["Cat_picked"] = "",
            roamingSettings.values["Cat_picked_img"] = "",
            roamingSettings.values["Cat_picked_img2"] = "",
            roamingSettings.values["Cat_picked_img3"] = "",
            roamingSettings.values["Func_name"] = "",
            roamingSettings.values["Func_pic"] = "",
            roamingSettings.values["Func_info"] = "",
            roamingSettings.values["Func_price"] = "",
            roamingSettings.values["Func_label"] = "",
            roamingSettings.values["Base_name"] = "",
            roamingSettings.values["Base_pic"] = "",
            roamingSettings.values["Base_vend"] = "",
            roamingSettings.values["Base_price"] = "",
            roamingSettings.values["Boost1_name"] = "",
            roamingSettings.values["Boost1_pic"] = "",
            roamingSettings.values["Boost1_vend"] = "",
            roamingSettings.values["Boost1_price"] = "",
            roamingSettings.values["Boost2_name"] = "",
            roamingSettings.values["Boost2_pic"] = "",
            roamingSettings.values["Boost2_vend"] = "",
            roamingSettings.values["Boost2_price"] = "",
            roamingSettings.values["Boost3_name"] = "",
            roamingSettings.values["Boost3_pic"] = "",
            roamingSettings.values["Boost3_vend"] = "",
            roamingSettings.values["Boost3_price"] = "",
            roamingSettings.values["Boost4_name"] = "",
            roamingSettings.values["Boost4_pic"] = "",
            roamingSettings.values["Boost4_vend"] = "",
            roamingSettings.values["Boost4_price"] = "",
            roamingSettings.values["FlavSel_name"] = "",
            roamingSettings.values["FlavSel_pic"] = "",
            roamingSettings.values["FlavSel_vend"] = "",
            roamingSettings.values["Flav_name"] = ""

            remove.pop_list(age_data.model.info_page2);
            remove.pop_list(age_data.model.the_boost_sel);
            remove.pop_list(age_data.model.info);
            remove.pop_list(age_data.model.info_sport);
            roamingSettings.values["I_ordered"] = "no";
            if (!roamingSettings.values["not_cont"]) {
                roamingSettings.values["the_complete_total"] = 0;
            }
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
            roamingSettings.values["Base_name"] = "",
            roamingSettings.values["Base_pic"] = "",
            roamingSettings.values["Base_vend"] = "",
            roamingSettings.values["Base_price"] = "",
            roamingSettings.values["Boost1_name"] = "",
            roamingSettings.values["Boost1_pic"] = "",
            roamingSettings.values["Boost1_vend"] = "",
            roamingSettings.values["Boost1_price"] = "",
            roamingSettings.values["Boost2_name"] = "",
            roamingSettings.values["Boost2_pic"] = "",
            roamingSettings.values["Boost2_vend"] = "",
            roamingSettings.values["Boost2_price"] = "",
            roamingSettings.values["Boost3_name"] = "",
            roamingSettings.values["Boost3_pic"] = "",
            roamingSettings.values["Boost3_vend"] = "",
            roamingSettings.values["Boost3_price"] = "",
            roamingSettings.values["Boost4_name"] = "",
            roamingSettings.values["Boost4_pic"] = "",
            roamingSettings.values["Boost4_vend"] = "",
            roamingSettings.values["Boost4_price"] = "",
            roamingSettings.values["FlavSel_name"] = "",
            roamingSettings.values["FlavSel_pic"] = "",
            roamingSettings.values["FlavSel_vend"] = "",
            roamingSettings.values["Flav_name"] = ""
           // roamingSettings.values["the_complete_total"] = 0;

        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />
            //roamingSettings.values["Base_info"] = document.getElementById("sel_base_info").textContent;
            // TODO: Respond to changes in layout.
        }

    });

    var cat_picked = "";

    WinJS.Namespace.define("cat_clicked", {

        passon: function (me) {
            var updated_answer = me.replace(/^\s+/, '').replace(/\s+$/, '');
            cat_picked = updated_answer;
        },

        next_page: function () {
            WinJS.Navigation.navigate('pages/home/home.html');
            var appData = Windows.Storage.ApplicationData.current;
            var roamingSettings = appData.roamingSettings;
            roamingSettings.values["Cat_picked"] = cat_picked;
            roamingSettings.values["Cat_picked_img"] = document.getElementById("make_drink_img").src;
            roamingSettings.values["Cat_picked_img2"] = document.getElementById("make_drink_img2").src;
            roamingSettings.values["Cat_picked_img3"] = document.getElementById("nutrigenetics_img").src;
        },

        clicked: function () {
            roamingSettings.values["Clicked_cat"] = document.getElementById("supl_sport_name").textContent;
        },
        clicked2: function () {
            roamingSettings.values["Clicked_cat"] = document.getElementById("learn_more_title").textContent;
            //console.log(roamingSettings.values["Clicked_cat"]);
        }
    })

})();
