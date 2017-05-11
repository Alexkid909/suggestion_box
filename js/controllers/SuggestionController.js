app.controller('SuggestionController',
	['$scope',
	'$routeParams',
	'suggestions','sharedScope',
	function($scope,$routeParams,suggestions,sharedScope) {
		var _this = this;
		_this.data = sharedScope.data;
		for (key in sharedScope.methods) {
			_this[key] = sharedScope.methods[key];
		};

		$scope.suggestion = suggestions[$routeParams.id];
		$scope.comments = $scope.suggestion.comments;
		$scope.getCommentAuthorNames = function() {
			for (var i = 0;i < $scope.comments.length;i++) {
					var authorId = $scope.comments[i].authorId;
					$scope.comments[i].authorName = _this.getUserName(authorId);
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
				authorId: _this.data.currentUser.id,
				authorName: _this.data.currentUser.name,
				deleted: false,
				votes: 0,

			});
			$scope.body = '';
		};
		$scope.vote = function(comment,direction) {
			var userVotedItem = _this.getUserVotedItem(comment,"comment");			
			if(!userVotedItem) {
				var newItem = 					{
						id: comment.id,
						score: 1
					};
				if(!_this.data.currentUser.commentsVoted) {
					_this.data.currentUser.commentsVoted = []
				}
				_this.data.currentUser.commentsVoted.push(newItem);
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