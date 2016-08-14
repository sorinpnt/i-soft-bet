var dashboardController = function( $scope, gifModel, favouritesModel ) {
	var ctrl = this;

	ctrl.dashboardData = [];

	var getGifsSuccess = function( response ) {

		ctrl.dashboardData = ctrl.dashboardData.concat (response.data );
		console.info(ctrl.dashboardData);
	};

	gifModel
		.get(1, 25)
		.then( getGifsSuccess );

	ctrl.addToFavorites = function ( itemId ) {
		console.log(itemId);
		favouritesModel.save(itemId);
	};
};

dashboardController.$inject = [ '$scope', 'gifModel', 'favouritesModel' ];