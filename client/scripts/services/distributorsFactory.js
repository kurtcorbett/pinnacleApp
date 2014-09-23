(function() {

    var distributorsFactory = function () {

        var distributors = [
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
        ];

        var factory = {};
        factory.getDistributors = function() {
          return distributors;
        };
        return factory;
    };

    angular.module('app').factory('distributorsFactory',distributorsFactory);

}());