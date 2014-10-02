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

        $scope.numOrders = $scope.orders.length;
        $scope.pie1 = {

            percent:78
        };

        $scope.pie2 = {
            percent: 53
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

        $scope.progress = 60;




        $scope.wescoTotal = function() {
            var total = 0;
            for (var key in $scope.orders) {
                if($scope.orders[key]['distributor'] === "WESCO"){
                    total += $scope.orders[key]['amount'];
                }
            }
            return total;
        };

        $scope.wescoPercent = function () {

            var wesco =$scope.wescoTotal();
            var total = $scope.orderTotals();
            return (wesco/total) * 100;

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

        $scope.codalePercent = function () {

            var codale =$scope.codaleTotal();
            var total = $scope.orderTotals();
            return (codale/total) * 100;

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

        $scope.graybarPercent = function () {

            var graybar =$scope.graybarTotal();
            var total = $scope.orderTotals();
            return (graybar/total) * 100;

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
