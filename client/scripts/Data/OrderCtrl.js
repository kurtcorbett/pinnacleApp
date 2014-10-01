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

            return total;
        };


//        var ced = {
//            total: function() {

//                var total = 0;
//                for (var key in $scope.orders) {
//                    if($scope.orders[key]['distributor'] === "CED"){
//                        total += $scope.orders[key]['amount'];
//                    }
//                }
//                return total;
//            },
//            percent: function () {
//
//                var ced =$scope.cedTotal();
//                var total = $scope.orderTotals();
//                return (ced/total) * 100;
//
//            }
//
//        };

        $scope.cedTotal = function() {
            var total = 0;
            for (var key in $scope.orders) {
                if($scope.orders[key]['distributor'] === "CED"){
                    total += $scope.orders[key]['amount'];
                }
            }
            return total;
        };
        $scope.cedPercent = function () {

            var ced =$scope.cedTotal();
            var total = $scope.orderTotals();
            return (ced/total) * 100;

        };




        $scope.wescoTotal = function() {
            var total = 0;
            for (var key in $scope.orders) {
                if($scope.orders[key]['distributor'] === "WESCO"){
                    total += $scope.orders[key]['amount'];
                }
            }
            return total;
        };

        $scope.codaleTotal = function() {
            var total = 0;
            for (var key in $scope.orders) {
                if($scope.orders[key]['distributor'] === "CODALE"){
                    total += $scope.orders[key]['amount'];
                }
            }
            return total;
        };

        $scope.graybarTotal = function() {
            var total = 0;
            for (var key in $scope.orders) {
                if($scope.orders[key]['distributor'] === "GRAYBAR"){
                    total += $scope.orders[key]['amount'];
                }
            }
            return total;
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
