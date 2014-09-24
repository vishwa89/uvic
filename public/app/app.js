'use strict';

var uvic = angular.module('uvic', ['ngResource', 'ngRoute', 'restangular']);

uvic
.config(function($routeProvider, $locationProvider, RestangularProvider) {
	$locationProvider.html5Mode(true);
	RestangularProvider.setBaseUrl('/data');

	$routeProvider
	.when('/', { templateUrl: '/pages/index' })
	.when('/immigration', { templateUrl: '/pages/immigration-home' })
	.when('/immigration/student_visa', { templateUrl: '/pages/student-visa' })
	.when('/education', { templateUrl: '/pages/education-home' })
	.when('/education/articles', { templateUrl: '/pages/article-index' })
	.when('/articles', { templateUrl: '/pages/articles' })
	.when('/article-:id.html', { templateUrl: '/pages/article' })
	.when('/search', { templateUrl: '/pages/search' })
	.when('/courses', { templateUrl: '/pages/courses' });

});