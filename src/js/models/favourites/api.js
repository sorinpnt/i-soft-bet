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
 		var newFav = [];
 		if ( currentFav.length !== 1 ) {
 			newFav = currentFav;
 		};
		newFav.splice( currentFav.indexOf(id), 1);
 		$rootScope.totalFavouritesItems = newFav.length;
 		localStorageService.set('fav', newFav);
 	};

	return {
 		add: _.add,
 		getAll: _.getAll,
 		removeID: _.removeID
 	};
};

favouritesApiService.$inject = [ '$rootScope', 'localStorageService' ];