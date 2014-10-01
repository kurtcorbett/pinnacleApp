(function() {
    'use strict';

    var orderCtrl = function($scope,ordersService, manufacturersFactory) {

        $scope.order = {
            date: null
        };


        $scope.manufacturers = manufacturersFactory.getManufacturers();

        $scope.orders = {};


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
