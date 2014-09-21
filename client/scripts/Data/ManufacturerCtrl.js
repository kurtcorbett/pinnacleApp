Angular.module('app')
    .controller('manufacturerCtl' ['manufacturerService', function(manufacturerService) {


        $scope.manufacturers = getManfucturers();


    }]);