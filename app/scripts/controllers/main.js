'use strict';

angular.module('worthApp').controller('MainCtrl', function ($scope, $http, $interval) {

	$scope.getPrice = function(){
		$http.jsonp('https://coinbase.com/api/v1/prices/spot_rate?callback=JSON_CALLBACK').success(function(data){
			$scope.data = data;
		});
	};

	$scope.getPrice();

	$interval($scope.getPrice, 60000);
});
