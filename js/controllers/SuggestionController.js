app.controller('SuggestionController',
	['$scope',
	'$routeParams',
	'suggestions','sharedScope','users',
	function($scope,$routeParams,suggestions,sharedScope,users) {
		// var _this = this;
		// _this.data = sharedScope.data;
		for (key in sharedScope) {
			$scope[key] = sharedScope[key];
		};

		$scope.suggestion = suggestions[$routeParams.id];
		$scope.comments = $scope.suggestion.comments;
		$scope.getCommentAuthorNames = function() {
			for (var i = 0;i < $scope.comments.length;i++) {
					var authorId = $scope.comments[i].authorId;
					$scope.comments[i].authorName = users.getUserName(authorId);
			};
		};
		$scope.getCommentAuthorNames();		
		$scope.addComment = function() {
			debugger;
			if(!$scope.body || $scope.body === "") {
				return; 
			}
			$scope.suggestion.comments.push({
				id: $scope.comments.length,
				body: $scope.body,
				authorId: $scope.data.currentUser.id,
				authorName: $scope.data.currentUser.name,
				deleted: false,
				votes: 0,

			});
			$scope.body = '';
		};
		$scope.vote = function(comment,direction) {
			var userVotedItem = users.getUserVotedItem(comment,"comment");			
			if(!userVotedItem) {
				var newItem = 					{
						id: comment.id,
						score: 1
					};
				if(!$scope.data.currentUser.commentsVoted) {
					_this.data.currentUser.commentsVoted = []
				}
				$scope.data.currentUser.commentsVoted.push(newItem);
			} else {
				switch (direction) {
					case "up":
						++userVotedItem.score;
						break;
					case "down":
						--userVotedItem.score;
						break;
				};
			};
			switch (direction) {
				case "up":
					++comment.votes;
					break;
				case "down":
					--comment.votes;
					break;
			};
		};	
	}]);