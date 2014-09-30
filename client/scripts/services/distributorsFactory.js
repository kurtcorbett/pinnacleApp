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
        return {
            getDistributors: function() {
                return distributors;
            },
            getDistributorsCount: function() {
                return distributors.length;
            }
        };
    };

    angular.module('app').factory('distributorsFactory',distributorsFactory);

}());