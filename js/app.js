var app = angular.module('SuggestionBox',['ngRoute']);

app.service('sharedProperties',['users',
	function(users) {
		var properties = {
			currentUserId: undefined,
			getCurrentUserId: function() {
				return currentUserId;
			},
			setCurrentUserId: function(id){
				currentUserId = id;
			},
			getUserName: function(userId) {
				for (var i = 0; i < users.length; i++) {
					if (users[i].id == userId) {
								return users[i].name;
					};
				};
			}
		};
		return properties;
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