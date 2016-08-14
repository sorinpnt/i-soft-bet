var dashboardController = function( $rootScope, $scope, gifModel, favouritesModel ) {
	var ctrl = this;

	var currentPage = 0;
	var itemsPerPage = 50;
	ctrl.dashboardData = [];

	ctrl.addToFavorites = function ( itemId ) {
		favouritesModel.save(itemId);
	};


	var getGifsSuccess = function( response ) {
		ctrl.dashboardData = ctrl.dashboardData.concat(response.data );
		$rootScope.dashboardPageLoading = false;
	};

	ctrl.loadNextPage = function() {
		$rootScope.dashboardPageLoading = true;
		currentPage = currentPage + 1;
		gifModel
			.get(currentPage, itemsPerPage)
			.then( getGifsSuccess );
	};

};

dashboardController.$inject = [ '$rootScope', '$scope', 'gifModel', 'favouritesModel' ];