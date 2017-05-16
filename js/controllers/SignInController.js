app.controller('SignInController',['$scope',
	'$routeParams',
	'users',
	'sharedScope',
	function($scope,
	$routeParams,
	users,sharedScope) {
		var _this = this;
		_this.data = sharedScope.data;

		$scope.users = users.data;
		$scope.currentUser = users.currentUser;
		$scope.signIn = function() {
		debugger;
			var newUserId = $scope.users.length;
			$scope.users.push({
				id: newUserId,
				name: $scope.user_name
			});
			users.currentUser = users.data[newUserId];
			// console.log("Currently signed in as "+_this.data.currentUser.name+" ID "+_this.data.currentUser.id);			
			window.location.href = '#/';
		};
	}
]);