var favouritesModel = function( favouritesApiService, toastr ) {

	var _ = this;

	_.save = function( favItemId ) {
		if ( favouritesApiService.add(favItemId) ) {
			toastr.success('Gif added to favourites')
		} else {
			toastr.error('An error ocurred');
		};
	};

	_.getIDs = function() {
		return favouritesApiService.getAll().join(',');
	};

	_.removeID = function( favId ) {
		favouritesApiService.removeID( favId );
		toastr.success('Gif removed from favourites')
	};
	return {
		save: _.save,
		getIDs: _.getIDs,
		remove: _.removeID,
	}
};

favouritesModel.$inject = [ 'favouritesApiService', 'toastr' ];