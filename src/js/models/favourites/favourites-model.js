var favouritesModel = function( favouritesApiService, toastr ) {

	var _ = this;

	_.save = function( favItemId ) {
		if ( favouritesApiService.add(favItemId) ) {
			toastr.success('Gif added to favourites')
		} else {
			toastr.error('An error ocurred');
		};
	};

	return {
		save: _.save
	}
};

favouritesModel.$inject = [ 'favouritesApiService', 'toastr' ];