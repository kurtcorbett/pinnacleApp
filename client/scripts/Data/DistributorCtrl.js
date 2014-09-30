(function() {

    var distributorCtrl = function($scope,distributorsFactory) {

        $scope.distributors = [];

        function init() {
            $scope.distributors = distributorsFactory.getDistributors();
        }

        init();


    };

    angular.module('app')
        .controller('distributorCtrl',distributorCtrl);

}());