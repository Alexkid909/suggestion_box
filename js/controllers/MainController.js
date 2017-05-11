app.controller('MainController',[
	'$scope',
	'suggestions',
	'sharedScope','sharedScope',
	function($scope,suggestions,sharedScope,sharedScope) {
		var _this = this;
		_this.data = sharedScope.data;
		for (key in sharedScope.methods) {
			_this[key] = sharedScope.methods[key];
		};
		$scope.header = 'Suggestion Box';
		$scope.suggestions = suggestions;
		$scope.editItem = "";
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
				deleted: false,				
				comments: []
			});
			$scope.title = '';
		};
		$scope.deleteSuggestion = function() {

		};
		$scope.vote = function(suggestion,direction) {
			var userVotedItem = _this.getUserVotedItem(suggestion,"suggestion");			
			if(!userVotedItem) {
				var newItem = 					{
						id: suggestion.id,
						score: 1
					};
				if(!_this.data.currentUser.suggestionsVoted) {
					_this.data.currentUser.suggestionsVoted = []
				}
				_this.data.currentUser.suggestionsVoted.push(newItem);
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
		$scope.getCurrentUserName = function() {
			if(_this.getCurrentUserId() == undefined) {
				this.currentUserName = _this.getUserName(_this.getCurrentUserId());
			};
		};
		$scope.editSuggestion = function(index,event,suggestion) {
			// debugger;
			var suggestionTextElement = event.currentTarget.parentNode.querySelector('span.suggestion-title');
			_this.data.editItem = index;
			_this.data.editMode = true;
			suggestionTextElement.setAttribute('contentEditable',true);
			suggestionTextElement.focus();
			suggestionTextElement.addEventListener('keypress',function(event) {
				if(event.code == 'Enter') {
					event.preventDefault();
					suggestion.title = suggestionTextElement.textContent;
					suggestionTextElement.blur();
					$scope.$apply(function() {
						_this.data.editMode = false;
						_this.data.editItem = null;
					});
				};
			});
			// Add a means to confirm that editing is complete
			//Commit the changes to the suggestion to the model

		};

	}
]);