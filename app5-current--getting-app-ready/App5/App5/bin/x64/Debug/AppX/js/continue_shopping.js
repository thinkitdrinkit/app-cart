(function () {

    var the_full_order = Array();

    WinJS.Namespace.define("the_order_full", {
        get_order: function (info, remove) {
            if (!remove) {
                the_full_order.push(info);
                console.log("Boom!Boom!");
                return the_full_order;
            } else {
                var i = 0;
                while (i < the_full_order.length + 1000) {
                    the_full_order.pop();
                    i++
                }
            }
        }
    })
})()