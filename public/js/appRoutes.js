angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/charts', {
			templateUrl: 'views/charts.html',
			controller: 'ChartsController'
		});

	$locationProvider.html5Mode(true);

}]);
