(function() {

    var manufacturersFactory = function() {

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

        var factory = {};
        factory.getManufacturers = function() {
            return manufacturers;
        };

        return factory;

    };

    angular.module('app').factory('manufacturersFactory', manufacturersFactory);

}());