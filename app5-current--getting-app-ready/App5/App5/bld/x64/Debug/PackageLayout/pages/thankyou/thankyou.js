// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var appData = Windows.Storage.ApplicationData.current;
    var roamingSettings = appData.roamingSettings;

    var Age = thinkitdrinkitDataClient.getTable("UserOrders");

    WinJS.UI.Pages.define("/pages/thankyou/thankyou.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            design.getThanks();
            design.changeTextColor();
            document.getElementById("thanks_h1").textContent = "Thank you for your order." ;
            document.getElementById("thanks_h2").textContent = "Your order number is: " + (roamingSettings.values["Invoice_number"]) + ".";
            console.log(roamingSettings.values["Invoice_number"]);

           /* function Delayer() {
                setTimeout(function () {
                    document.getElementById("thanks_h2").textContent = "Your order number is: " + roamingSettings.values["Invoice_number"] + ".";
                    console.log('Final Page Invoice# ' + roamingSettings.values["Invoice_number"]);
                }, 3000);
            }
            Delayer()*/

            var query = Age.where({
                OrderNumber: (roamingSettings.values["Invoice_number"])
            }).read().done(function (results) {
                roamingSettings.values["the_id"] = results[0].id;
            }, function (err) {
                console.log(err);
            });

        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });

    WinJS.Namespace.define("thanksClick", {
        clicked_yes: function () {
            roamingSettings.values["I_ordered"] === "yes";
            WinJS.Navigation.navigate('pages/signup/signup.html')
            roamingSettings.values["Base_name"] = "",
             roamingSettings.values["Base_pic"] = "",
             roamingSettings.values["Base_vend"] = "",
             roamingSettings.values["Base_price"] = "",
             roamingSettings.values["Age_name"] = "",
             roamingSettings.values["Age_pic"] = "",
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
             roamingSettings.values["FlavSel_name"] = "",
             roamingSettings.values["FlavSel_pic"] = "",
             roamingSettings.values["FlavSel_vend"] = "",
             roamingSettings.values["Flav_name"] = ""

        },
        clicked_no: function () {
            roamingSettings.values["I_ordered"] === "no";
            WinJS.Navigation.navigate('pages/launch_page/launch_page.html')
            
          roamingSettings.values["Base_name"] = "",
          roamingSettings.values["Base_pic"] = "",
          roamingSettings.values["Base_vend"] = "",
          roamingSettings.values["Base_price"] = "",
          roamingSettings.values["Age_name"] = "",
          roamingSettings.values["Age_pic"] = "",
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
          roamingSettings.values["FlavSel_name"] = "",
          roamingSettings.values["FlavSel_pic"] = "",
          roamingSettings.values["FlavSel_vend"] = "",
          roamingSettings.values["Flav_name"] = "";

        }
    })
})();
