app.controller('MainController',[
	'$scope',
	'suggestions',
	'sharedScope','sharedScope',
	function($scope,suggestions,sharedScope,sharedScope) {
		var _this = this;
		// _this.data = sharedScope.data;
		// _this.methods = sharedScope.methods;
		_this.data = sharedScope.data;
		for (key in sharedScope.methods) {
			_this[key] = sharedScope.methods[key];
		};

		$scope.header = 'Suggestion Box';
		$scope.suggestions = suggestions;
		$scope.getSuggestionAuthorNames = function() {
			for (var i = 0;i < $scope.suggestions.length;i++) {
					var authorId = $scope.suggestions[i].authorId;
					$scope.suggestions[i].authorName = _this.getUserName(authorId);
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
				authorId: _this.data.currentUser.id,
				authorName: _this.data.currentUser.name,
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
		$scope.getCurrentUserName = function() {
			if(_this.getCurrentUserId() == undefined) {
				this.currentUserName = _this.getUserName(_this.getCurrentUserId());
			};
		};	
	}
]);