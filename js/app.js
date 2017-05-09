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
			debugger;
			e.preventDefault
			_this.data.currentUser = {};
			console.log("Currently signed in as "+_this.data.currentUser.name);			

		},
		logEditMode: function() {
			debugger;
			console.log(_this.data.editMode); 
		},
		toggleEditMode: function()	{
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