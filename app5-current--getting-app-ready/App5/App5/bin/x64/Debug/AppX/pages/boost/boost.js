// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var _num4 = "";
    var _num3 = "";
    var appData = Windows.Storage.ApplicationData.current;
    var roamingSettings = appData.roamingSettings;
    var Age = thinkitdrinkitDataClient.getTable("Boost");
    var keepInfo = true;
    var boost1Active = false;
    var boost2Active = false;
    var boost3Active = false;
    var thename1 = "";
    var thename2 = "";
    var thename3 = "";
    var thename4 = "";
    var thename0 = "";


    WinJS.UI.Pages.define("/pages/boost/boost.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            //this removes saved boosts name: bug seems to been holding it in all pages of the app. 
            thename1 = "";
            thename2 = "";
            thename3 = "";
            thename4 = "";
            thename0 = "";

            WinJS.Binding.processAll(element, age_data.model);
            
            if (roamingSettings.values["orderComplete"]) {
                remove.pop_list(age_data.model.the_boost_sel);
            }

            design.getBoost();
            design.changeTextColor();

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
            document.getElementById("flav_p").textContent = roamingSettings.values["FlavSel_name"];
            document.getElementById("flav_pic").src = roamingSettings.values["FlavSel_pic"];
            document.getElementById("where_you_are4").textContent = "You have choosen the " + roamingSettings.values["FlavSel_name"] + " Flavor.";

            //milo: show checkout button right away so some can buy with out boost picked
            document.getElementById("btn_right").removeAttribute("hidden");

            if (roamingSettings.values["Base_protein"] === true) {
                document.getElementById("flav_div").setAttribute("hidden", true)
                document.getElementById("flav2_div").setAttribute("hidden", true)
            }

            //document.getElementById("theBoostAge").textContent = roamingSettings.values["Age_name"];
            
            server.boost(roamingSettings.values["Func_name"]);

            if (age_data.model.the_boost_sel.length === 1) {
                thename1 = roamingSettings.values["Boost1_name"];
                //console.log(roamingSettings.values["Boost1_name"] + roamingSettings.values["Boost1_pic"]);
                document.getElementById("the_number").textContent = age_data.model.the_boost_sel.length;
                document.getElementById("the_num").textContent = age_data.model.the_boost_sel.length;
    
                document.getElementById("div_boost1_name").textContent = roamingSettings.values["Boost1_name"];
                document.getElementById("area_img1").src = roamingSettings.values["Boost1_pic"];

                document.getElementById("boost1_div").removeAttribute("hidden");
                document.getElementById("the_test");
               // keepInfo = false;
            } else if (age_data.model.the_boost_sel.length === 2) {
                
                thename1 = roamingSettings.values["Boost1_name"];
               // console.log("one boost " + roamingSettings.values["Boost1_name"] + roamingSettings.values["Boost1_pic"]);
                document.getElementById("the_number").textContent = age_data.model.the_boost_sel.length;
                document.getElementById("the_num").textContent = age_data.model.the_boost_sel.length;

                document.getElementById("div_boost1_name").textContent = roamingSettings.values["Boost1_name"];
                document.getElementById("area_img1").src = roamingSettings.values["Boost1_pic"];

                document.getElementById("boost1_div").removeAttribute("hidden");
                document.getElementById("the_test");

               // console.log("two boost: " + roamingSettings.values["Boost2_name"] + roamingSettings.values["Boost2_pic"]);
                thename2 = roamingSettings.values["Boost2_name"];
                document.getElementById("the_number").textContent = age_data.model.the_boost_sel.length;
                document.getElementById("the_num").textContent = age_data.model.the_boost_sel.length;

                document.getElementById("div_boost2_name").textContent = roamingSettings.values["Boost2_name"];
                document.getElementById("area_img2").src = roamingSettings.values["Boost2_pic"];
                document.getElementById("boost2_div").removeAttribute("hidden");

            } else if (age_data.model.the_boost_sel.length === 3) {
               
                thename1 = roamingSettings.values["Boost1_name"];
                document.getElementById("the_number").textContent = age_data.model.the_boost_sel.length;
                document.getElementById("the_num").textContent = age_data.model.the_boost_sel.length;
                document.getElementById("div_boost1_name").textContent = roamingSettings.values["Boost1_name"];
                document.getElementById("area_img1").src = roamingSettings.values["Boost1_pic"];
                document.getElementById("boost1_div").removeAttribute("hidden");
                document.getElementById("the_test");

                thename2 = roamingSettings.values["Boost2_name"];
                document.getElementById("the_number").textContent = age_data.model.the_boost_sel.length;
                document.getElementById("the_num").textContent = age_data.model.the_boost_sel.length;
                document.getElementById("div_boost2_name").textContent = roamingSettings.values["Boost2_name"];
                document.getElementById("area_img2").src = roamingSettings.values["Boost2_pic"];
                document.getElementById("boost2_div").removeAttribute("hidden");

                thename3 = roamingSettings.values["Boost3_name"];
                document.getElementById("the_number").textContent = age_data.model.the_boost_sel.length;
                document.getElementById("the_num").textContent = age_data.model.the_boost_sel.length;
                document.getElementById("area_img3").src = roamingSettings.values["Boost3_pic"];
                document.getElementById("boost3_div").removeAttribute("hidden");
                document.getElementById("div_boost3_name").textContent = roamingSettings.values["Boost3_name"];

            } else if (age_data.model.the_boost_sel.length === 4) {

                thename1 = roamingSettings.values["Boost1_name"];
                document.getElementById("the_number").textContent = age_data.model.the_boost_sel.length;
                document.getElementById("the_num").textContent = age_data.model.the_boost_sel.length;
                document.getElementById("div_boost1_name").textContent = roamingSettings.values["Boost1_name"];
                document.getElementById("area_img1").src = roamingSettings.values["Boost1_pic"];
                document.getElementById("boost1_div").removeAttribute("hidden");
                document.getElementById("the_test");

                thename2 = roamingSettings.values["Boost2_name"];
                document.getElementById("the_number").textContent = age_data.model.the_boost_sel.length;
                document.getElementById("the_num").textContent = age_data.model.the_boost_sel.length;
                document.getElementById("div_boost2_name").textContent = roamingSettings.values["Boost2_name"];
                document.getElementById("area_img2").src = roamingSettings.values["Boost2_pic"];
                document.getElementById("boost2_div").removeAttribute("hidden");

                thename3 = roamingSettings.values["Boost3_name"];
                document.getElementById("the_number").textContent = age_data.model.the_boost_sel.length;
                document.getElementById("the_num").textContent = age_data.model.the_boost_sel.length;
                document.getElementById("area_img3").src = roamingSettings.values["Boost3_pic"];
                document.getElementById("boost3_div").removeAttribute("hidden");
                document.getElementById("div_boost3_name").textContent = roamingSettings.values["Boost3_name"];

                thename4 = roamingSettings.values["Boost4_name"];
                document.getElementById("the_number").textContent = age_data.model.the_boost_sel.length;
                document.getElementById("the_num").textContent = age_data.model.the_boost_sel.length;
                document.getElementById("area_img4").src = roamingSettings.values["Boost4_pic"];
                document.getElementById("boost4_div").removeAttribute("hidden");
                document.getElementById("div_boost4_name").textContent = roamingSettings.values["Boost4_name"];

            }  else if (age_data.model.the_boost_sel.length === 0) {
                thename0 = roamingSettings.values["Boost0_name"];
                document.getElementById("the_number").textContent = age_data.model.the_boost_sel.length;
                document.getElementById("the_num").textContent = age_data.model.the_boost_sel.length;

                //document.getElementById("div_boost1_name").textContent = roamingSettings.values["Boost1_name"];
                //document.getElementById("area_img1").src = roamingSettings.values["Boost1_pic"];

                document.getElementById("the_test");
            }
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
            remove.pop_list(age_data.model.boost);
            remove.pop_list(age_data.model.info_page5);
            
            if (!keepInfo) {
                remove.pop_list(age_data.model.the_boost_sel);
            }
    

        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />
        
            // TODO: Respond to changes in layout.
        }
    });


    thename1 = "";
    thename2 = "";
    thename3 = "";
    thename4 = "";
    thename0 = "";
    //console.log(thename1, thename2, thename3);

    WinJS.Namespace.define("boost_clicked", {
       
        clicked1: function (name, img, price, vend, label) {
            //document.getElementById("btn_right").removeAttribute("hidden");

            //var boostView = element.querySelector().winControl;


            if (age_data.model.the_boost_sel.length < 4) {
                //console.log(thename1, thename2, thename3, thename4, thename5, thename6, thename7, thename8, thename9);
                //var fix1 = age_data.model.the_boost_sel.length;
                //&& (fix1 > 0 && fix1 < 9)
                if (name === thename1) {
                    document.getElementById("only_one_warning").removeAttribute("hidden");
                } else if (name === thename2) {
                    document.getElementById("only_one_warning").removeAttribute("hidden");
                } else if (name === thename3) {
                    document.getElementById("only_one_warning").removeAttribute("hidden");
                } else if (name === thename4) {
                    document.getElementById("only_one_warning").removeAttribute("hidden");
                } else {
                    age_data.model.the_boost_sel.push({ the_name: name, the_pic: img });            
                    document.getElementById("only_one_warning").setAttribute("hidden", true);

                    //console.log("double " + thename1 +" "+ thename2 +" "+ thename3 +" "+ name)

                    //if statements should be placed here for the 1 boost condition
                    if (age_data.model.the_boost_sel.length === 1) {
                        thename1 = name;
                        document.getElementById("the_number").textContent = age_data.model.the_boost_sel.length;
                        document.getElementById("the_num").textContent = age_data.model.the_boost_sel.length;
                        roamingSettings.values["Boost1_name"] = name;
                        roamingSettings.values["Boost1_pic"] = img;
                        roamingSettings.values["Boost1_info"] = null;
                        roamingSettings.values["Boost1_price"] = price;
                        roamingSettings.values["Boost1_vend"] = vend;
                        roamingSettings.values["Boost1_pic_label"] = label;
                        document.getElementById("div_boost1_name").textContent = name;
                        document.getElementById("area_img1").src = roamingSettings.values["Boost1_pic"];
                        document.getElementById("boost1_div").removeAttribute("hidden");
                        document.getElementById("the_test");
                        console.log(roamingSettings.values["Boost1_name"] + roamingSettings.values["Boost1_pic"]);
                        keepInfo = false;

                    } else if (age_data.model.the_boost_sel.length === 2) {
                        thename2 = name;
                        document.getElementById("the_number").textContent = age_data.model.the_boost_sel.length;
                        document.getElementById("the_num").textContent = age_data.model.the_boost_sel.length;
                        roamingSettings.values["Boost2_name"] = name;
                        roamingSettings.values["Boost2_pic"] = img;
                        roamingSettings.values["Boost2_info"] = null;
                        roamingSettings.values["Boost2_price"] = price;
                        roamingSettings.values["Boost2_vend"] = vend;
                        roamingSettings.values["Boost2_pic_label"] = label;
                        document.getElementById("div_boost2_name").textContent = roamingSettings.values["Boost2_name"];
                        document.getElementById("area_img2").src = roamingSettings.values["Boost2_pic"];
                        console.log(roamingSettings.values["Boost2_name"] + roamingSettings.values["Boost2_pic"]);
                        document.getElementById("boost2_div").removeAttribute("hidden");
                        document.getElementById("the_test");
                        keepInfo = false;

                    } else if (age_data.model.the_boost_sel.length === 3) {
                        thename3 = name;
                        document.getElementById("the_number").textContent = age_data.model.the_boost_sel.length;
                        document.getElementById("the_num").textContent = age_data.model.the_boost_sel.length;
                        roamingSettings.values["Boost3_name"] = name;
                        roamingSettings.values["Boost3_pic"] = img;
                        roamingSettings.values["Boost3_info"] = null;
                        roamingSettings.values["Boost3_price"] = price;
                        roamingSettings.values["Boost3_vend"] = vend;
                        roamingSettings.values["Boost3_pic_label"] = label;
                        document.getElementById("area_img3").src = roamingSettings.values["Boost3_pic"];
                        console.log(roamingSettings.values["Boost3_name"] + roamingSettings.values["Boost3_pic"]);
                        document.getElementById("boost3_div").removeAttribute("hidden");
                        document.getElementById("div_boost3_name").textContent = name;
                        document.getElementById("the_test");
                        keepInfo = false;
                    } else if (age_data.model.the_boost_sel.length === 4) {
                        thename4 = name;
                        document.getElementById("the_number").textContent = age_data.model.the_boost_sel.length;
                        document.getElementById("the_num").textContent = age_data.model.the_boost_sel.length;
                        roamingSettings.values["Boost4_name"] = name;
                        roamingSettings.values["Boost4_pic"] = img;
                        roamingSettings.values["Boost4_info"] = null;
                        roamingSettings.values["Boost4_price"] = price;
                        roamingSettings.values["Boost4_vend"] = vend;
                        roamingSettings.values["Boost4_pic_label"] = label;
                        document.getElementById("area_img4").src = roamingSettings.values["Boost4_pic"];
                        console.log(roamingSettings.values["Boost4_name"] + roamingSettings.values["Boost4_pic"]);
                        document.getElementById("boost4_div").removeAttribute("hidden");
                        document.getElementById("div_boost4_name").textContent = name;
                        document.getElementById("the_test");
                        keepInfo = false;
                    } 
                }//ends else for duplicate check
            } else {
                document.getElementById("overError").textContent = " Sorry, You May Only Choose 4 Boosts. If You Want To Change Boosts, Please Click the Remove Last Button";
                document.getElementById("overError").style.color = "red";
                document.getElementById("overError").style.fontSize = "30px";
                document.getElementById("overError").style.marginTop = "100px";
                document.getElementById("overError").style.position = "Absolute";
            }
        },

        clicked: function (name) {
            remove.pop_list(age_data.model.info_page5);
            var updated_name = name.replace(/^\s+/, '').replace(/\s+$/, '');
            server.boost_sub(updated_name);
            keepInfo = false;
        },

        release: function () {
            document.getElementById("only_one_warning").setAttribute("hidden", true);
            if (age_data.model.the_boost_sel.length === 1) {
                roamingSettings.values["Boost1_name"] = "";
                roamingSettings.values["Boost1_pic"] = "";
                roamingSettings.values["Boost1_vend"] = "";
                roamingSettings.values["Boost1_info"] = null;
                roamingSettings.values["Boost1_price"] = null;
                roamingSettings.values["Boost1_pic_label"] = "";
                thename1 = "";
                document.getElementById("boost1_div").setAttribute("hidden", true);

            } else if (age_data.model.the_boost_sel.length === 2) {
                roamingSettings.values["Boost2_name"] = "";
                roamingSettings.values["Boost2_pic"] = "";
                roamingSettings.values["Boost2_vend"] = "";
                roamingSettings.values["Boost2_info"] = null;
                roamingSettings.values["Boost2_price"] = null;
                roamingSettings.values["Boost2_pic_label"] = "";
                thename2 = "";
                document.getElementById("boost2_div").setAttribute("hidden", true);

            } else if (age_data.model.the_boost_sel.length === 3) {
                roamingSettings.values["Boost3_name"] = "";
                roamingSettings.values["Boost3_pic"] = "";
                roamingSettings.values["Boost3_vend"] = "";
                roamingSettings.values["Boost3_info"] = null;
                roamingSettings.values["Boost3_price"] = null;
                roamingSettings.values["Boost3_pic_label"] = "";
                thename3 = "";
                document.getElementById("boost3_div").setAttribute("hidden", true);

            } else if (age_data.model.the_boost_sel.length === 4) {
                roamingSettings.values["Boost4_name"] = "";
                roamingSettings.values["Boost4_pic"] = "";
                roamingSettings.values["Boost4_vend"] = "";
                roamingSettings.values["Boost4_info"] = null;
                roamingSettings.values["Boost4_price"] = null;
                roamingSettings.values["Boost4_pic_label"] = "";
                thename4 = "";
                document.getElementById("boost4_div").setAttribute("hidden", true);
            } 
           
            age_data.model.the_boost_sel.pop();
            document.getElementById("overError").textContent = "";
            document.getElementById("the_number").textContent = age_data.model.the_boost_sel.length;
            document.getElementById("the_num").textContent = age_data.model.the_boost_sel.length;
            //if (age_data.model.the_boost_sel.length > 0) {
            //    document.getElementById("btn_right").removeAttribute("hidden");
            //} else if (age_data.model.the_boost_sel.length <= 0) {
            //    document.getElementById("btn_right").setAttribute("hidden", true);
            //}
        },
        more_info: function (clicked) {
            roamingSettings.values["Item_choosen"] = clicked;
            roamingSettings.values["Clicked_cat"] = "Boost";
            WinJS.Navigation.navigate('pages/item_info/item_info.html');
            roamingSettings.values["orderComplete"] = false;
            keepInfo = true;
        },
        finalKeepInfo: function () {

            if (thename0 === undefined || thename0 === "") {
                thename0 = name;
                document.getElementById("the_number").textContent = age_data.model.the_boost_sel.length;
                document.getElementById("the_num").textContent = age_data.model.the_boost_sel.length;
                roamingSettings.values["Boost0_name"] = name;
                document.getElementById("the_test");
                keepInfo = false;
            }

            WinJS.Navigation.navigate('pages/final/final.html');
            thename1 = "";
            thename2 = "";
            thename3 = "";
            thename4 = "";
            thename0 = "";
            roamingSettings.values["orderComplete"] = false;
            keepInfo = true;
        }
    })
})();
