app.controller('SignInController',['$scope',
	'$routeParams',
	'users',
	'sharedScope',
	function($scope,
	$routeParams,
	users,sharedScope) {
		var _this = this;
		_this.users = {};
		_this.sharedScope = {};
		for (key in users) {
			_this.users[key] = users[key];
		};
		// for (key in sharedScope) {
		// 	_this.sharedScope[key] = sharedScope[key];
		// };

		$scope.users = users.data;
		$scope.currentUser = users.variables.currentUser;
		$scope.signIn = function() {
			var newUserId = $scope.users.length;
			$scope.users.push({
				id: newUserId,
				name: $scope.user_name
			});
			_this.users.variables.currentUser = users.data[newUserId];
			console.log("Currently signed in as "+_this.users.variables.currentUser.name+" ID "+_this.users.variables.currentUser.id);			
			window.location.href = '#/';
		};
	}
]);