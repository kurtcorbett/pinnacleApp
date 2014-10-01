(function() {
    'use strict';

    var orderCtrl = function($scope,ordersService, manufacturersFactory) {

        $scope.order = {
            date: null
        };


        $scope.manufacturers = manufacturersFactory.getManufacturers();

        $scope.orders = {};

        $scope.orderTotals = function () {
            var total = 0;
            for (var key in $scope.orders) {
                var obj = $scope.orders[key];
                total += obj['amount'];
            }
            console.log(total);
        };


        var defaultOrder = {
            date: new Date
        };


        $scope.submitOrder = function() {
            console.log($scope.order);
            ordersService.createOrder($scope.order, function(data) {
                $scope.orders = data;
            });
            $scope.orderForm.$setPristine();
            $scope.order = angular.copy(defaultOrder);

        };



        ordersService.getOrders().then(function(result) {
            $scope.orders = result.data;
        });


    };

    angular.module('app')
        .controller('orderCtrl', orderCtrl);

}());
