// Controllers
forecastApp.controller('homeCtrl', ['$scope', '$location', 'areaService', 
	function($scope, $location, areaService) {

	$scope.area = areaService.area;

	$scope.$watch('area', function() {
		areaService.area = $scope.area;
	});

	$scope.submit = function() {

		$location.path("/forecast");

	}

}]);

forecastApp.controller('forecastCtrl', ['$scope', '$routeParams', 'areaService', 'forecastService', 
	function($scope, $routeParams, areaService, forecastService) {

	$scope.area = areaService.area;

	$scope.days = $routeParams.days || '5';

	$scope.forecastResult = forecastService.fetchWeather($scope.area, $scope.days);


	$scope.convertToFahrenheit = function(degKelvin) {

		return Math.round((1.8 * (degKelvin - 273) ) + 32 );

	};

	$scope.convertToDate = function(dt) {

		return new Date(dt * 1000);

	};

}]);
