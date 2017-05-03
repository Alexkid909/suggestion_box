app.controller('MainController',[
	'$scope',
	'suggestions',

	function($scope,suggestions) {
		$scope.header = 'Suggestion Box';
		$scope.suggestions = suggestions;
		$scope.addSuggestion = function() {
			if(!$scope.title || $scope.title === "") {
				return; 
			}

			$scope.suggestions.push({
				id: suggestions.length,
				title: $scope.title,
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