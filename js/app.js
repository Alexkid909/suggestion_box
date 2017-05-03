var app = angular.module('SuggestionBox',['ngRoute']);

app.config(function($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
	$routeProvider
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
	})
	;
});