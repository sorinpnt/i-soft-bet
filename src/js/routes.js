var routes = function( $stateProvider, $urlRouterProvider ) {

	$urlRouterProvider.otherwise('/dashboard');
	
	$stateProvider
		.state('dashboard', {
		  url: '/dashboard',
		  templateUrl: 'templates/dashboard-template.html',
		  controller: 'dashboardController as dashboardCtrl'
		})
		.state('favourites', {
		  url: '/favourites',
		  templateUrl: 'templates/favourites-template.html',
		  controller: 'favouritesController as favouritesCtrl'
		});
		
};
routes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

var appRoutes = angular.module('app.routes', []);
appRoutes.config(routes);