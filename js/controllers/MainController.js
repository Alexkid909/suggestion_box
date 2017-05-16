app.controller('MainController',['$scope'
	,'suggestions'
	,'sharedScope'
	,'users'
	,function($scope,suggestions,sharedScope,users) {
		// var _this = this;
		$scope.header = 'Suggestion Box';
		$scope.suggestions = suggestions;
		$scope.currentUser = users.currentUser;
		for (key in sharedScope) {
			$scope[key] = sharedScope[key];
		};
		$scope.getSuggestionAuthorNames = function() {
					for (var i = 0;i < $scope.suggestions.length;i++) {
					var authorId = $scope.suggestions[i].authorId;
					$scope.suggestions[i].authorName = users.getUserName(authorId);
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
				authorId: $scope.data.currentUser.id,
				authorName: $scope.data.currentUser.name,
				votes: 0,
				deleted: false,				
				comments: []
			});
			$scope.title = '';
		};
		$scope.vote = function(suggestion,direction) {
			var userVotedItem = users.getUserVotedItem(suggestion,"suggestion");			
			if(!userVotedItem) {
				var newItem = 					{
						id: suggestion.id,
						score: 1
					};
				if(!$scope.data.currentUser.suggestionsVoted) {
					$scope.data.currentUser.suggestionsVoted = []
				}
				$scope.data.currentUser.suggestionsVoted.push(newItem);
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
		debugger;
	}
]);