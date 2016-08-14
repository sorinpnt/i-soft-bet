var app = angular.module('app', [ 'ngResource', 'ui.router', 'toastr' ]);

var appController = function( $rootScope, $scope, $state, userService ) {};
appController.$inject = [ '$rootScope', '$scope', '$state', 'userService' ];

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