var gifApiService = function( $resource, API_DOMAIN, API_ENDPOINTS ) {
 	var _ = this;

 	_.resource = $resource('', {}, {
 		get: { url: API_DOMAIN + API_ENDPOINTS.GET_ALL, method: 'GET' },
 		getIDs: { url: API_DOMAIN + API_ENDPOINTS.GET_IDS, method: 'GET'}
 	});

	return {
 		resource: _.resource
 	};
};

gifApiService.$inject = [ '$resource', 'API_DOMAIN', 'API_ENDPOINTS' ];