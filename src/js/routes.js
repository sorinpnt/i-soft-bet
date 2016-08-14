var routes = function( $stateProvider, $urlRouterProvider ) {

	// $urlRouterProvider.otherwise('/dashboard');

	// $stateProvider
	// 	.state('dashboard', {
	// 	  url: '/dashboard',
	// 	  templateUrl: 'templates/dashboard-template.html',
	// 	  controller: 'dashboardController as dashboardCtrl'
	// 	});
};
routes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

var appRoutes = angular.module('app.routes', []);
appRoutes.config(routes);