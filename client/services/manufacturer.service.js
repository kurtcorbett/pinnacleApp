angular.module('app')
    .factory('manufacturerService', function($http){
        var manufacturers = [
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
        ];
        return {
            getManufacturers: function() {
                return manufacturers;
            }
        };

    });
