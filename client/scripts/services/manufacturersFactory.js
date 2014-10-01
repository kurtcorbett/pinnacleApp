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
            },
            {
                name: "Ilsco",
                product: "Digital Tools"
            },
            {
                name: "Amprobe",
                product: "Digital Tools"
            },
            {
                name: "Gibson",
                product: "Digital Tools"
            },
            {
                name: "LEDtronics",
                product: "Digital Tools"
            },
            {
                name: "Accuenergy",
                product: "Digital Tools"
            }, {
                name: "Molex",
                product: "Digital Tools"
            }
        ];

        return {
            getManufacturers: function () {
                return manufacturers;
            }
        };

    };

    angular.module('app').factory('manufacturersFactory', manufacturersFactory);

}());