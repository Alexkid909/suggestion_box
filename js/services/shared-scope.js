app.factory('sharedScope',
	['$rootScope'
	,'users'
	,function($rootScope,users) {
	var _this = this;
	_this.data = {
		editMode: false,
		dialogMode: false,
		currentUser: {},
		itemBeingEdited: null,
		dialogItem: null

	};
	_this.signOut = function(e) {
		e.preventDefault
		_this.data.currentUser = {};
		console.log("Currently signed in as "+_this.data.currentUser.name);			

	},
	_this.toggleEditMode = function() {
		var editMode = _this.data.editMode;
		_this.data.editMode = !editMode;
	},
	_this.deleteItem = function() {
		_this.data.dialogItem.deleted = true;
		_this.toggleConfirmDialog();
	},
	_this.editItem = function(index,event,item,itemType) {
		var itemTypeClass = '.'+itemType;
		var textElementTitleString = '.'+itemType+'-title';
		var textElement = document.querySelectorAll(itemTypeClass)[index].querySelector(textElementTitleString);
		_this.data.itemBeingEdited = index;
		textElement.setAttribute('contentEditable',true);
		textElement.focus();
			_this.data.editMode = true;
		textElement.addEventListener('keypress',function(event) {
			if(event.code == 'Enter') {
				event.preventDefault();
				item.title = textElement.textContent;
				textElement.blur();
				$rootScope.$apply(function() {
					_this.data.editMode = false;
					_this.data.itemBeingEdited = null;
				});
			};
		});
	},
	_this.toggleConfirmDialog = function(item) {
		var dialogMode = _this.data.dialogMode;
		_this.data.dialogMode = !dialogMode;
		_this.data.dialogItem = item;
	}	
	return _this;
}]);