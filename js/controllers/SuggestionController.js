app.controller('SuggestionController',
	['$scope',
	'$routeParams',
	'suggestions',
	'sharedScope',
	'users',
	function($scope,$routeParams,suggestions,sharedScope,users) {
		var _this = this;
		_this.users = {};
		_this.sharedScope = {};
		for (key in users) {
			_this.users[key] = users[key];
		};
		for (key in sharedScope) {
			_this.sharedScope[key] = sharedScope[key];
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
			// debugger;
			if(!$scope.body || $scope.body === "") {
				return; 
			}
			$scope.suggestion.comments.push({
				id: $scope.comments.length,
				body: $scope.body,
				authorId: _this.users.variables.currentUser.id,
				authorName: _this.users.variables.currentUser.name,
				deleted: false,
				votes: 0,

			});
			$scope.body = '';
		};
		$scope.vote = function(comment,direction) {
			debugger;
			var userVotedItem = users.getUserVotedItem(comment,"comment");			
			if(!userVotedItem) {
				var newItem = 					{
						id: comment.id,
						score: 1
					};
				if(!_this.users.variables.currentUser.commentsVoted) {
					_this.users.variables.currentUser.commentsVoted = []
				}
				_this.users.variables.currentUser.commentsVoted.push(newItem);
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