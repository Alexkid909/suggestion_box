app.controller('MainController',[
	'$scope',
	'suggestions',
	'sharedProperties',
	function($scope,suggestions,sharedProperties) {
		$scope.header = 'Suggestion Box';
		$scope.suggestions = suggestions;
		$scope.getSuggestionAuthorNames = function() {
			for (var i = 0;i < $scope.suggestions.length;i++) {
					var authorId = $scope.suggestions[i].authorId;
					$scope.suggestions[i].authorName = sharedProperties.getUserName(authorId);
			};
		};
		$scope.getSuggestionAuthorNames();
		$scope.addSuggestion = function() {
			if(!$scope.title || $scope.title === "") {
				return; 
			}
			$scope.authorId = sharedProperties.getCurrentUserId();
			$scope.authorName = sharedProperties.getUserName($scope.authorId);
			$scope.suggestions.push({
				id: suggestions.length,
				title: $scope.title,
				authorId: $scope.authorId,
				authorName: $scope.authorName,
				votes: 0,
				comments: []
			});

			$scope.title = '';
		};
		$scope.upVote = function(suggestion) {
			++suggestion.votes
		};
		$scope.downVote = function(suggestion) {
			--suggestion.votes
		};		
	}
]);