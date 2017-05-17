app.factory('sharedScope',['$rootScope','users',function($rootScope,users) {
	var _this = this;
	_this.data = {
		editMode: false,
		dialogMode: false,
		currentUser: {},
		itemBeingEdited: null
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
	_this.deleteItem = function(event,item,itemType) {
		this.data.dialogItem.deleted = true;
		this.toggleConfirmDialog();
	},
	_this.editItem = function(index,event,item) {
		// debugger;
		var suggestionTextElement = document.querySelectorAll('.suggestion-container')[index].querySelector('.suggestion-title');
		_this.data.itemBeingEdited = index;
		suggestionTextElement.setAttribute('contentEditable',true);
		suggestionTextElement.focus();
			_this.data.editMode = true;
		suggestionTextElement.addEventListener('keypress',function(event) {
			if(event.code == 'Enter') {
				event.preventDefault();
				item.title = suggestionTextElement.textContent;
				suggestionTextElement.blur();
				$rootScope.$apply(function() {
					_this.data.editMode = false;
					_this.data.itemBeingEdited = null;
				});
			};
		});
	},
	_this.toggleConfirmDialog = function(item) {
		debugger;
		var dialogMode = this.data.dialogMode;
		this.data.dialogMode = !dialogMode;
		this.data.dialogItem = item;
	}	
	return _this;
}]);