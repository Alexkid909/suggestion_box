app.controller('SuggestionController',
	['$scope',
	'$routeParams',
	'suggestions','sharedProperties',
	function($scope,$routeParams,suggestions,sharedProperties) {
		$scope.suggestion = suggestions[$routeParams.id];
		$scope.comments = $scope.suggestion.comments;
		$scope.getCommentAuthorNames = function() {
			for (var i = 0;i < $scope.comments.length;i++) {
					var authorId = $scope.comments[i].authorId;
					$scope.comments[i].authorName = sharedProperties.getUserName(authorId);
			};
		};
		$scope.getCommentAuthorNames();		
		$scope.addComment = function() {
			if(!$scope.body || $scope.body === "") {
				return; 
			}
			$scope.authorId = sharedProperties.getCurrentUserId();
			$scope.authorName = sharedProperties.getUserName($scope.authorId);				 
			$scope.suggestion.comments.push({
				body: $scope.body,
				authorId: $scope.authorId,
				authorName: $scope.authorName,				
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