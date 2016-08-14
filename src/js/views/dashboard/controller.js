var dashboardController = function( $scope, gifModel ) {
	var ctrl = this;

	ctrl.dashboardData = [];

	var getGifsSuccess = function( response ) {

		ctrl.dashboardData = ctrl.dashboardData.concat (response.data );
		console.info(ctrl.dashboardData);
	};

	gifModel
		.get(1, 25)
		.then( getGifsSuccess );
};

dashboardController.$inject = [ '$scope', 'gifModel' ];