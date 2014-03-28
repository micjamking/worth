'use strict';

angular.module('worthApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute'
])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
