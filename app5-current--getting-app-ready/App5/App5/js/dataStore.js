//This file is currently inactive, the data is instead being stored using local Storage
//Will use a modified version of this file in the future

(function () {

    var the_order = Array();

    WinJS.Namespace.define("get_set", {
        get_order: function (info, remove) {
            if (!remove) {
                the_order.push(info);
                console.log(the_order);
                return the_order;
            }
            else {
                var i = 0;
                while (i < the_order.length + 100) {
                    the_order.pop();
                    i++
                }
            }
        }
    })
})