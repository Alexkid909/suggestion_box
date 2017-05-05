var app = angular.module('SuggestionBox',['ngRoute']);

app.factory('sharedScope',['users',function(users) {
	var _this = this;
	_this.data = {
		text: "init text from factory",
		currentUser: {}
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
		test: function() {
			debugger;
		}
	};
	return _this;
}]);

// app.service('sharedProperties',['users',function(users) {
// 		debugger;
// 		var properties = 
// 		return properties;
// }]);

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