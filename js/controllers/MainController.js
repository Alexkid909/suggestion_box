app.controller('MainController',['$scope'
	,'suggestions'
	,'sharedScope'
	,'$mdDialog'
	,function($scope,suggestions,sharedScope,$mdDialog) {
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
		  $scope.status = '  ';
		  $scope.customFullscreen = false;

		  $scope.showAlert = function(ev) {
		    // Appending dialog to document.body to cover sidenav in docs app
		    // Modal dialogs should fully cover application
		    // to prevent interaction outside of dialog
		    $mdDialog.show(
		      $mdDialog.alert()
		        .parent(angular.element(document.querySelector('#popupContainer')))
		        .clickOutsideToClose(true)
		        .title('This is an alert title')
		        .textContent('You can specify some description text in here.')
		        .ariaLabel('Alert Dialog Demo')
		        .ok('Got it!')
		        .targetEvent(ev)
		    );
		  };

		  $scope.showConfirm = function(ev) {
		  	debugger;
		    // Appending dialog to document.body to cover sidenav in docs app
		    var confirm = $mdDialog.confirm()
		          .title('Are you sure?')
		          // .textContent('All of the banks have agreed to forgive you your debts.')
		          .ariaLabel('Lucky day')
		          .targetEvent(ev)
		          .ok('Yes')
		          .cancel('No');

		    $mdDialog.show(confirm).then(function() {
		      $scope.status = 'You decided to get rid of your debt.';
		    }, function() {
		      $scope.status = 'You decided to keep your debt.';
		    });
		  };

		  $scope.showPrompt = function(ev) {
		    // Appending dialog to document.body to cover sidenav in docs app
		    var confirm = $mdDialog.prompt()
		      .title('What would you name your dog?')
		      .textContent('Bowser is a common name.')
		      .placeholder('Dog name')
		      .ariaLabel('Dog name')
		      .initialValue('Buddy')
		      .targetEvent(ev)
		      .ok('Okay!')
		      .cancel('I\'m a cat person');

		    $mdDialog.show(confirm).then(function(result) {
		      $scope.status = 'You decided to name your dog ' + result + '.';
		    }, function() {
		      $scope.status = 'You didn\'t name your dog.';
		    });
		  };

		  $scope.showAdvanced = function(ev) {
		    $mdDialog.show({
		      controller: DialogController,
		      templateUrl: 'dialog1.tmpl.html',
		      parent: angular.element(document.body),
		      targetEvent: ev,
		      clickOutsideToClose:true,
		      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
		    })
		    .then(function(answer) {
		      $scope.status = 'You said the information was "' + answer + '".';
		    }, function() {
		      $scope.status = 'You cancelled the dialog.';
		    });
		  };

		  $scope.showTabDialog = function(ev) {
		    $mdDialog.show({
		      controller: DialogController,
		      templateUrl: 'tabDialog.tmpl.html',
		      parent: angular.element(document.body),
		      targetEvent: ev,
		      clickOutsideToClose:true
		    })
		        .then(function(answer) {
		          $scope.status = 'You said the information was "' + answer + '".';
		        }, function() {
		          $scope.status = 'You cancelled the dialog.';
		        });
		  };

		  $scope.showPrerenderedDialog = function(ev) {
		    $mdDialog.show({
		      contentElement: '#myDialog',
		      parent: angular.element(document.body),
		      targetEvent: ev,
		      clickOutsideToClose: true
		    });
		  };

		  function DialogController($scope, $mdDialog) {
		    $scope.hide = function() {
		      $mdDialog.hide();
		    };

		    $scope.cancel = function() {
		      $mdDialog.cancel();
		    };

		    $scope.answer = function(answer) {
		      $mdDialog.hide(answer);
		    };
		  }
	}
]);