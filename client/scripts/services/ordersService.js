(function() {

    var ordersService = function ($http) {


        return {

            orders: [],

            getOrders: function() {
                return $http.get('http://localhost:3000/orders');
//                req.success(function(data, status, headers, config) {
//                    console.log(data);
//                });
//                req.error(function(data, status, headers, config) {
//                   console.log(status);
//                });
            },

            createOrder: function(order, callback) {
                var req = $http.post('http://localhost:3000/orders', {order: order});
                req.success(function(data, status, headers, config) {
                    console.log(data);
                    callback(data);
                });
                req.error(function(data, status, headers, config) {
                    console.log(status);
                });
            }

        };
    };

    angular.module('app').factory('ordersService',ordersService);

}());
