var favouritesApiService = function( $rootScope, localStorageService ) {
 	var _ = this;
	

 	_.add = function( id ) {
 		var currentFav = localStorageService.get('fav');
 		if ( currentFav === null ) { currentFav = []; }
 		currentFav.push(id);
 		$rootScope.totalFavouritesItems = currentFav.length;
 		return localStorageService.set('fav',currentFav);
 	};

 	_.getAll = function() {
		currentFav = localStorageService.get('fav');
 		if ( currentFav === null ) { currentFav = []; }
		$rootScope.totalFavouritesItems = currentFav.length;
 		return currentFav;
 	};

 	_.removeID = function(id) {
 		var currentFav = localStorageService.get('fav');
 		var currentFavStr = currentFav.join(',');
 		var newFav = currentFavStr.replace(id, '').replace(',,', ',').split(',');
 		$rootScope.totalFavouritesItems = newFav.length - 1;
 		localStorageService.set('fav', newFav);
 	};

	return {
 		add: _.add,
 		getAll: _.getAll,
 		removeID: _.removeID
 	};
};

favouritesApiService.$inject = [ '$rootScope', 'localStorageService' ];