(function () {
    "use strict";
    var appData = Windows.Storage.ApplicationData.current;
    var roamingSettings = appData.roamingSettings;
    var Age = thinkitdrinkitDataClient.getTable("Age");
    var keepInfo = true;
    //var the_sel_age;

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            WinJS.Binding.processAll(element, age_data.model);
            design.getHome();
            design.changeTextColor();
            //roamingSettings.values["I_ordered"] = "no";
            document.getElementById("home").removeAttribute("hidden");
            document.getElementById("more_info_home").setAttribute("hidden", true);
            document.getElementById("shop").setAttribute("hidden", true);
            document.getElementById("choosen_age").textContent = "Select a " + roamingSettings.values["Cat_picked"] + " Category.";
            var the_sel_age = roamingSettings.values["Cat_picked"];

            document.getElementById("age_p").textContent = the_sel_age;

            if (the_sel_age === "Nutritional") {
                //age_pic is really the catagory image that was picked previously
                document.getElementById("age_pic").src = roamingSettings.values["Cat_picked_img"];
                document.getElementById("where_you_are").textContent = "You have choosen the " + roamingSettings.values["Cat_picked"] + " catagory." + " You have 4 steps left.";
            }

            if (the_sel_age === "Protein") {
                document.getElementById("age_pic").src = roamingSettings.values["Cat_picked_img2"];
                document.getElementById("where_you_are").textContent = "You have choosen the " + roamingSettings.values["Cat_picked"] + " catagory." + " You have 4 steps left.";
                document.getElementById("user_age").textContent = "Protein";
            }

            if (the_sel_age === "Nutrigenetics") {
                document.getElementById("age_pic").src = roamingSettings.values["Cat_picked_img3"];
                document.getElementById("where_you_are").textContent = "You have choosen the " + roamingSettings.values["Cat_picked"] + " catagory.";
                document.getElementById("choosen_age").textContent = "Choose Your Test Kit";
                document.getElementById("nutrigenetics_price_div").removeAttribute("hidden");
            }
            //gather the infomation from the database and displays it on the sreen
            server.home(the_sel_age);

        },

        unload: function () {
            // TODO: Respond to navigations away from this page.            
            //using the removeInfo.js file to delete the last object of the array as long as an item exists
            remove.pop_list(age_data.model.age);
            //milo: removing keepInfo data when back button is used from func page.
            remove.pop_list(age_data.model.info_page2_func);
            if (!keepInfo) {
                remove.pop_list(age_data.model.info)
            }
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });

    // the following namespace will be used to complete all click events on the home.html page
    var _choosen_cat = "";
    var nutrigeneticsPrice = "";
    //Milo: I defined this above and it needs to be done here to in order for it to work inside the WinJS
    //var the_sel_age = "";
    //console.log("Cat picked = " + roamingSettings.values["Cat_picked"] + " The sel age = " + the_sel_age);

    WinJS.Namespace.define('clicked_me', {
        //the clicked function will show the photo and the more indept information of the clicked age group
        //at the bottem of the home.html page
        clicked: function (me) {          
            var updated_answer = me.replace(/^\s+/, '').replace(/\s+$/, '');
            _choosen_cat = updated_answer;
            //gather information from from the database as the user clicks on the diffent ages
            //and then displays that information
            server.home_sub(updated_answer);
            //milo: some code does not work well from here 
        },

        next_page: function () {
            keepInfo = false;
            //milo: will not recall if this is missing even though these are gloabaly defined. 
            var appData = Windows.Storage.ApplicationData.current;
            var roamingSettings = appData.roamingSettings;

            if (roamingSettings.values["Cat_picked"] === "Nutrigenetics") {
                WinJS.Navigation.navigate('pages/final/final.html');
                roamingSettings.values["Nutrigenetics_name"] = _choosen_cat;
                roamingSettings.values["Nutrigenetics_pic"] = document.getElementById("sel_age_pic").src;
                roamingSettings.values["Nutrigenetics_price"] = document.getElementById("nutrigenetics_price").textContent;
                //roamingSettings.values["Nutrigenetics_label"] = document.getElementById("sel_base_pic").src;

            } else {
                keepInfo = false;
                WinJS.Navigation.navigate('pages/func/func.html');
                var appData = Windows.Storage.ApplicationData.current;
                var roamingSettings = appData.roamingSettings;
                roamingSettings.values["Age_name"] = _choosen_cat;
                roamingSettings.values["Age_pic"] = document.getElementById("sel_age_pic").src;
                roamingSettings.values["Age_info"] = null;
                roamingSettings.values["Age_price"] = null;
        }
        },

        more_info: function (clicked) {
            var updated_answer = clicked.replace(/^\s+/, '').replace(/\s+$/, '');
            roamingSettings.values["Item_choosen"] = updated_answer;
            roamingSettings.values["Clicked_cat"] = "Age"
            WinJS.Navigation.navigate('pages/item_info/item_info.html');
        }
    })
    
})();
