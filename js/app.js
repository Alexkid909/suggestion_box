var app = angular.module('SuggestionBox',['ngRoute'
	]);

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
		templateUrl: 'views/home.html',
		controllerAs: 'main'
	})
	.otherwise({
		redirectTo: '/'
	});
});