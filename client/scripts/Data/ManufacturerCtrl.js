(function() {

    var manufacturerCtrl = function($scope,manufacturersFactory) {

        $scope.manufacturers = [];

        function init() {
            $scope.manufacturers = manufacturersFactory.getManufacturers();
        }

        init();

    };

    angular.module('app')
        .controller('manufacturerCtrl', manufacturerCtrl);

}());