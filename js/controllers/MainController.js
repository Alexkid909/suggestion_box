app.controller('MainController',['$scope'
	,'suggestions'
	,'sharedScope'
	,'users'
	,function($scope,suggestions,sharedScope,users) {
		var _this = this;
		_this.users = {};
		_this.sharedScope = {};
		for (key in users) {
			_this.users[key] = users[key];
		};
		for (key in sharedScope) {
			_this.sharedScope[key] = sharedScope[key];
		};
		$scope.header = 'Suggestion Box';
		$scope.suggestions = suggestions;
		$scope.getSuggestionAuthorNames = function() {
					for (var i = 0;i < $scope.suggestions.length;i++) {
					var authorId = $scope.suggestions[i].authorId;
					$scope.suggestions[i].authorName = _this.users.getUserName(authorId);
			};
		};
		$scope.getSuggestionAuthorNames();
		$scope.addSuggestion = function() {
			if(!$scope.title || $scope.title === "") {
				return; 
			}
			$scope.suggestions.push({
				id: suggestions.length,
				title: $scope.title,
				authorId: _this.users.variables.currentUser.id,
				authorName: _this.users.variables.currentUser.name,
				votes: 0,
				deleted: false,				
				comments: []
			});
			$scope.title = '';
		};
		$scope.vote = function(suggestion,direction) {
			debugger;
			var userVotedItem = _this.users.getUserVotedItem(suggestion,"suggestion");			
			if(!userVotedItem) {
				var newItem = 					{
						id: suggestion.id,
						score: 1
					};
				if(!_this.users.variables.currentUser.suggestionsVoted) {
					_this.users.variables.currentUser.suggestionsVoted = []
				}
				_this.users.variables.currentUser.suggestionsVoted.push(newItem);
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
					++suggestion.votes;
					break;
				case "down":
					--suggestion.votes;
					break;
			};
		};		
	}
]);