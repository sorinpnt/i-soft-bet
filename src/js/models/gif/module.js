var gifModule = angular.module('app.gif-model', []);

gifModule.constant('API_DOMAIN', 'http://api.giphy.com/v1');
gifModule.constant('API_ENDPOINTS', {
	GET_ALL: '/gifs/trending',
});


gifModule.factory('gifApiService', gifApiService);
gifModule.factory('gifModel', gifModel);