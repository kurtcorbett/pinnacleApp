(function() {

    angular.module('app.data.ctrls', [])

        .controller('manufacturerCtrl', ["$scope", function($scope) {

            $scope.manufacturers = [
                {
                    name: "Acme",
                    product: "Transformers"
                },
                {
                    name: "Bridgeport",
                    product: "Conduit Fittings"
                },
                {
                    name: "Champion",
                    product: "Fiberglass Conduit"
                },
                {
                    name: "Fluke",
                    product: "Digital Tools"
                }
            ]

        }])


}());