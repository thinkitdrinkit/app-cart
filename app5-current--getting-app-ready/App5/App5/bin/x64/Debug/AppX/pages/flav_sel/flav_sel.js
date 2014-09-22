// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var appData = Windows.Storage.ApplicationData.current;
    var roamingSettings = appData.roamingSettings;
    var Age = thinkitdrinkitDataClient.getTable("Flavor");
    var keepInfo = true;

    WinJS.UI.Pages.define("/pages/flav_sel/flav_sel.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            WinJS.Binding.processAll(element, age_data.model);
            design.getFlavSel();
            design.changeTextColor();

            document.getElementById("age_p").textContent = "Age: " + roamingSettings.values["Age_name"];
            document.getElementById("base_p").textContent = "Base: " + roamingSettings.values["Base_name"];
           

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
                document.getElementById("func_p").textContent = roamingSettings.values["Func_name"];
                document.getElementById("func_pic").src = roamingSettings.values["Func_pic"];
                document.getElementById("base_p").textContent = roamingSettings.values["Base_name"];
                document.getElementById("base_pic").src = roamingSettings.values["Base_pic"];
                document.getElementById("where_you_are3").textContent = "You have choosen the " + roamingSettings.values["Base_name"] + " Base." + " You have 1 steps left.";

            document.getElementById("flav_sel_header").textContent = "Choose Your " + "Flavor.";

            server.flav_sel();
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
                remove.pop_list(age_data.model.flavor1);
            
            if (!keepInfo) {
                remove.pop_list(age_data.model.info_page4);
            }
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });
    var the_choosenFlav = "";
    WinJS.Namespace.define("flav_sel_clicked", {
      
        clicked: function (flav1) {
            var updated_flav1 = flav1.replace(/^\s+/, '').replace(/\s+$/, '');

            remove.pop_list(age_data.model.info_page4);
            the_choosenFlav = updated_flav1;
            server.flav_sel_sub(updated_flav1);
        },

        next_page_boost: function () {
            keepInfo = true;
            WinJS.Navigation.navigate('pages/boost/boost.html')
            roamingSettings.values["FlavSel_name"] = the_choosenFlav;
            roamingSettings.values["FlavSel_pic"] = document.getElementById("hidden_flav_pic").src;
            roamingSettings.values["FlavSel_vend"] = document.getElementById("f_vend").textContent;
            roamingSettings.values["FlavSel_info"] = null;
            roamingSettings.values["FlavSel_price"] = null;
            roamingSettings.values["FlavSel_label"] = document.getElementById("flav_sel_sel_pic").src;
        },
        more_info: function (clicked) {
            roamingSettings.values["Item_choosen"] = clicked;
            roamingSettings.values["Clicked_cat"] = "Flavor";
            WinJS.Navigation.navigate('pages/item_info/item_info.html');
            keepInfo = true;
        }

    })

})();
