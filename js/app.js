var app = angular.module('SuggestionBox',['ngRoute']);

app.factory('sharedScope',['users',function(users) {
	var _this = this;
	_this.data = {
		text: "init text from factory",
		currentUser: {},
		editMode: false,
	};
	_this.methods = {
		getCurrentUserId: function() {
			return this.currentUserId;
		},
		setCurrentUserId: function(id){
			this.currentUserId = id;

		},
		getUserName:  function(userId) {
			for (var i = 0; i < users.length; i++) {
				if (users[i].id == userId) {
					return users[i].name;
				};
			};
		},
		signOut: function(e) {
			e.preventDefault
			_this.data.currentUser = {};
			console.log("Currently signed in as "+_this.data.currentUser.name);			

		},
		getUserVotedItem: function(item,itemType) {
			var userVotedItem;
			if (_this.data.currentUser.hasOwnProperty(itemType+"sVoted")) {
				_this.data.currentUser[itemType+"sVoted"].forEach(function(itemVoted) { 
					if (itemVoted.id == item.id) {
						userVotedItem = itemVoted;
					};
				});
				return userVotedItem;
			};
		},
		getCurrentUserItemScore:function(item,itemType) {
			var userVotedItem = this.getUserVotedItem(item,itemType);
			if (!userVotedItem) {
				return 0;
			} else {
				return userVotedItem.score;
			};
		},
		toggleEditMode: function() {
			var editMode = _this.data.editMode;
			_this.data.editMode = !editMode;
		}
	};
	return _this;
}]);

app.config(function($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
	$routeProvider
	.when('/sign_in',{
		controller: 'SignInController',
		templateUrl: 'views/sign_in.html'
	})
	.when('/suggestion/:id',{
		controller: 'SuggestionController',
		templateUrl: 'views/suggestion.html'
	})
	.when('/',{
		controller: 'MainController',
		templateUrl: 'views/home.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});