var extractNameFromSlugFilter = function() {
	return function(slugifiedName) {
		var startingIdPosition = slugifiedName.lastIndexOf('-');
		var result = slugifiedName.substr(0, startingIdPosition).split('-').join(' ');
		return result.toUpperCase();
	};
};
