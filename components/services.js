// Services
forecastApp.service('areaService', function() {

	this.area = "New York, New York";

});

forecastApp.service('forecastService', ['$resource', function($resource) {

	this.fetchWeather = function (area, days) {

		var forecastAPI = $resource("http://api.openweathermap.org/data/2.5/weather/daily", 
		{ callback: "JSON_CALLBACK" }, { get: { method: "JSONP"}} );

		return forecastAPI.get({ q: area, cnt: days  });

	}
	
}]);

