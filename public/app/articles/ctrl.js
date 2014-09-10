'use strict';

uvic
.controller('articlesCtrl', ['$scope', '$routeParams', 'Restangular', function ($scope, $routeParams, Restangular) {
	Restangular.all('articles.json').getList().then(function(response) {
	  $scope.articles = response;
	  var article = _.where($scope.articles, {id: $routeParams.id});
    $scope.article = article[0];
	});
}]);