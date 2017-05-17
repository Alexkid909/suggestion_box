app.directive('comment',function() {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/templates/comment.html',
		controller: 'SuggestionController'
	};
});