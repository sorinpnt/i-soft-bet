var gifModel = function( $q, gifApiService, toastr ) {

	var _ = this;

	_.get = function( page, items_per_page) {
		
		var deferred = $q.defer();

		var getSuccess = function( data ) { deferred.resolve( data ); };

		var getError = function(data) {
			toastr.error( 'Error retrieving results ...' );
			deferred.reject(data);
		};

		gifApiService
			.resource
			.get({ offset: ( page - 1 ) * items_per_page, limit: items_per_page, api_key: 'dc6zaTOxFJmzC'  })
			.$promise
			.then(getSuccess, getError);

		return deferred.promise;
	};

	_.getIDs = function( ids ) {
		
		var deferred = $q.defer();

		var getSuccess = function( data ) { deferred.resolve( data ); };

		var getError = function(data) {
			toastr.error( 'Error retrieving results ...' );
			deferred.reject(data);
		};

		gifApiService
			.resource
			.getIDs({ ids: ids, api_key: 'dc6zaTOxFJmzC'  })
			.$promise
			.then(getSuccess, getError);

		return deferred.promise;
	};
	return {
		get: _.get,
		getIDs: _.getIDs
	}
};

gifModel.$inject = [ '$q', 'gifApiService', 'toastr' ];