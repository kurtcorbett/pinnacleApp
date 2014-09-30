(function() {
    'use strict';

    var orderCtrl = function($scope,ordersService, manufacturersFactory) {

        $scope.order = {
            date: null
        };

        $scope.manufacturers = manufacturersFactory.getManufacturers();

        $scope.submitOrder = function() {
            console.log("here");
            console.log($scope.order);
            ordersService.createOrder($scope.order);
        };


    };

    angular.module('app')
        .controller('orderCtrl', orderCtrl);

}());
