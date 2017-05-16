app.factory('users',[function() {
	var _this = {};
	_this.data = [
		{
			id: 0,
			name: 'Dave' 
		},
		{
			id: 1,
			name: 'John' 
		},
		{
			id: 2,
			name: 'Sue' 
		},
		{
			id: 3,
			name: 'Sarah' 
		},
		{
			id: 4,
			name: 'Andy' 
		},
		{
			id: 5,
			name: 'Tom' 
		}
	],
	_this.currentUser = {},
	_this.getCurrentUserId = function() {
			return this.currentUserId;
		},
	_this.setCurrentUserId = function(id){
		this.currentUserId = id;

	},
	_this.getUserVotedItem = function(item,itemType) {
		debugger;
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
	_this.getCurrentUserItemScore = function(item,itemType) {
		var userVotedItem = this.getUserVotedItem(item,itemType);
		if (!userVotedItem) {
			return 0;
		} else {
			return userVotedItem.score;
		};
	},	
	_this.getUserName =  function(userId) {
		for (var i = 0; i < _this.data.length; i++) {
			if (_this.data[i].id == userId) {
				return _this.data[i].name;
			};
		};
	},
	_this.getCurrentUserName = function() {
		debugger;
		if(this.getCurrentUserId() == undefined) {
			this.currentUserName = this.getUserName(this.getCurrentUserId());
		};
	}	
	return _this;
}]);