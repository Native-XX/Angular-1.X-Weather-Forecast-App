// Directives
forecastApp.directive("forecastReport", function() {

	return {
		restrict: 'E',
		templateUrl: 'directives/forecastReport.html',
		replace: true,
		scope: {
			dayForecast: "=",
			convertTemp: "&",
			convertDate: "&",
			dateFormat: "@"
	}

		}

});