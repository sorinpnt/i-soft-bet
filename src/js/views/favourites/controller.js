var favouritesController = function( $scope, gifModel, favouritesModel ) {
	var ctrl = this;

	var loadFavouritesGifs = function() {

		var getFavouritesSuccess = function( response ) {
			ctrl.favouritesGifs = response.data;
		};

		gifModel
			.getIDs( favouritesModel.getIDs() )
			.then( getFavouritesSuccess );
	};
	
	ctrl.removeFromFav = function(favId) {
		favouritesModel.remove(favId);
		loadFavouritesGifs();
	};

	loadFavouritesGifs();
};

favouritesController.$inject = [ '$scope', 'gifModel', 'favouritesModel' ];