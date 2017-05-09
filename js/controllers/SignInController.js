app.controller('SignInController',['$scope',
	'$routeParams',
	'users',
	'sharedScope',
	function($scope,
	$routeParams,
	users,sharedScope) {
		var _this = this;
		_this.data = sharedScope.data;

		$scope.users = users;
		$scope.signIn = function() {	
			var newUserId = users.length;
			$scope.users.push({
				id: $scope.users.length,
				name: $scope.user_name
			});
			_this.data.currentUser = users[newUserId];
			console.log("Currently signed in as "+_this.data.currentUser.name);			
			window.location.href = '#/';
		};
	}
]);