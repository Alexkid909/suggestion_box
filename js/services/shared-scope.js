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
		itemBeingEditedIndex: null,
		dialogItem: null

	};
	_this.signOut = function(e) {
		e.preventDefault
		_this.data.currentUser = {};
		console.log("Currently signed in as "+_this.data.currentUser.name);			

	},
	_this.toggleEditMode = function() {
		// debugger;
		if (_this.data.editMode && _this.data.itemBeingEdited) {
			var textElement = _this.data.itemBeingEdited.querySelector('.title');
			textElement.setAttribute('contentEditable',false);
			_this.data.itemBeingEdited = null;
			_this.data.itemBeingEditedIndex = null;
		};
		var editMode = _this.data.editMode;
		_this.data.editMode = !editMode;
	},
	_this.deleteItem = function() {
		_this.data.dialogItem.deleted = true;
		_this.toggleConfirmDialog();
	},
	_this.editItem = function(index,event,item,itemType) {
		// debugger;
		var itemTypeClass = '.'+itemType;
		_this.data.itemBeingEdited = document.querySelectorAll(itemTypeClass)[index];
		var textElement = _this.data.itemBeingEdited.querySelector('.title');
		_this.data.itemBeingEditedIndex = index;
		var commitEdit = function(event) {
			if(event.code == 'Enter') {
				event.preventDefault();
				item.title = textElement.textContent;
				textElement.blur();
				$rootScope.$apply(function() {
					_this.data.editMode = false;
					_this.data.itemBeingEditedIndex = null;
					_this.data.itemBeingEdited = null;
				});
			};
		}
		textElement.setAttribute('contentEditable',true);
		textElement.focus();
			_this.data.editMode = true;
		textElement.addEventListener('keypress',function(event) {
			commitEdit(event);
		});
	},
	_this.toggleConfirmDialog = function(item) {
		var dialogMode = _this.data.dialogMode;
		_this.data.dialogMode = !dialogMode;
		_this.data.dialogItem = item;
	}	
	return _this;
}]);