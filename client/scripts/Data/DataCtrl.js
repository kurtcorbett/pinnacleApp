(function() {
    angular.module('app.data.ctrls', [])
//
//        .controller('manufacturerCtrl', ["$scope", function($scope) {
//
//            $scope.manufacturers = [
//                {
//                    name: "Acme",
//                    product: "Transformers"
//                },
//                {
//                    name: "Bridgeport",
//                    product: "Conduit Fittings"
//                },
//                {
//                    name: "Champion",
//                    product: "Fiberglass Conduit"
//                },
//                {
//                    name: "Fluke",
//                    product: "Digital Tools"
//                }
//            ]
//
//        }])

        .controller('distributorCtrl', ["$scope", function($scope) {

            $scope.distributors = [
                {
                    name: "CED",
                    location: "SLC"
                },
                {
                    name: "WESCO",
                    location: "SLC"
                },
                {
                    name: "CODALE",
                    location: "SLC"
                },
                {
                    name: "GRAYBAR",
                    location: "SLC"
                }
            ]

        }])





}());