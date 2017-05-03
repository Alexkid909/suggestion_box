app.controller('SuggestionController',
	['$scope',
	'$routeParams',
	'suggestions',
	function($scope,$routeParams,suggestions) {
		$scope.suggestion = suggestions[$routeParams.id];
		$scope.comments = $scope.suggestion.comments;
		$scope.addComment = function() {

			if(!$scope.body || $scope.body === "") {
				return; 
			}

			$scope.suggestion.comments.push({
				body: $scope.body,
				votes: 0,

			});
			$scope.body = '';
		};
		$scope.upVote = function(comment) {
			++comment.votes
		};
		$scope.downVote = function(comment) {
			--comment.votes
		};
	}]);