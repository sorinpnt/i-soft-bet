var app = angular.module('app', [ 
	'ngResource',
	'ui.router',
	'toastr',
	'app.header'
]);

var appController = function( $scope, $state ) {};
appController.$inject = [ '$scope', '$state' ];

var appConfig = function( toastrConfig ) {
  angular.extend(toastrConfig, {
    timeOut: 2000,
	closeButton: true,
	tapToDismiss: true
  });

};
appConfig.$inject = [ 'toastrConfig' ];

app.controller('appController', appController)
   .config(appConfig);