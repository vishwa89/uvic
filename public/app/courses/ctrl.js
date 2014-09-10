'use strict';

uvic
.controller('regionsCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
    Restangular.all('regions.json').getList().then(function(response) {
      $scope.regions = response;
    });
}])
.controller('subjectsCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
    Restangular.all('subjects.json').getList().then(function(response) {
      $scope.subjects = response;
    });
}])
.controller('coursesCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
    Restangular.all('courses.json').getList().then(function(response) {
      $scope.courses = response;
    });
  $scope.subjectOptions = [{value: "math"}, {value: "art"}, {value: "business"}];
  //$scope.subjects = $scope.subjectOptions[0];
  $scope.cityOptions = [{value: "a1"}, {value: "b1"}]
  //$scope.cities = $scope.cityOptions[0];
}]);