var favouritesApiService = function( $rootScope, localStorageService ) {
 	var _ = this;
	
	currentFav = localStorageService.get('fav');
	$rootScope.totalFavouritesItems = ( currentFav === null ? 0 : currentFav.length );

 	_.add = function( id ) {
 		var currentFav = localStorageService.get('fav');
 		if ( currentFav === null ) { currentFav = []; }
 		currentFav.push(id);
 		$rootScope.totalFavouritesItems = currentFav.length;
 		return localStorageService.set('fav',currentFav);
 	};

	return {
 		add: _.add
 	};
};

favouritesApiService.$inject = [ '$rootScope', 'localStorageService' ];