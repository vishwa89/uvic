'use strict';

var uvic = angular.module('uvic', ['ngResource', 'ngRoute', 'restangular']);

uvic
.config(function($routeProvider, $locationProvider, RestangularProvider) {
	$locationProvider.html5Mode(true);
	RestangularProvider.setBaseUrl('/data');

	$routeProvider
	.when('/', { templateUrl: '/pages/index' })
	.when('/about_us', { templateUrl: '/pages/about-us' })
	.when('/immigration', { templateUrl: '/pages/immigration-home' })
	.when('/immigration/student_visa', { templateUrl: '/pages/student-visa' })
	.when('/education', { templateUrl: '/pages/education-home' })
	.when('/articles', { templateUrl: '/pages/article-index' })
	.when('/uk-articles', { templateUrl: '/pages/uk-article-index' })
	.when('/article-:id.html', { templateUrl: '/pages/article-id' })
	.when('/uk-article-:id.html', { templateUrl: '/pages/uk-article-id' })
	.when('/search', { templateUrl: '/pages/search' })
	.when('/courses', { templateUrl: '/pages/courses' });

});