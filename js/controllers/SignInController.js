app.controller('SignInController',['$scope',
	'$routeParams',
	'users',
	'sharedProperties',
	function($scope,
	$routeParams,
	users,sharedProperties) {
		$scope.users = users;
		$scope.signIn = function() {
			sharedProperties.setCurrentUserId($scope.users.length);
			$scope.users.push({
				id: $scope.users.length,
				name: $scope.user_name
			});
			var currentUserId = sharedProperties.getCurrentUserId();
			var currentUserName = sharedProperties.getUserName(currentUserId);
			window.location.href = '#/';			
		};
	}
]);