app.factory('suggestions',[function() {
	var demoSuggestions = {
		suggestions: [
			{
				id: 0,
				title: "Come Friday afternoon when everyone has worked hard we should all get free ice cream to round off the week on a high, how's with me?",
				authorId: 0,
				votes: 20,
				deleted: false,
				comments: [
					{
						id: 0,
						body: "Awesome idea!",
						authorId: 3,
						deleted: false,
						votes: 5
					},
					{
						id: 1,
						body: "Never gonna happen.  This will totally never happen dude.  I can eat gallons of Ice cream and its likely to cost the business a fortune and make me ill.",
						authorId: 2,
						deleted: true,
						votes: 3
					},
					{
						id: 2,
						body: "Can we also have sprinkles?",
						authorId: 4,
						deleted: false,				
						votes: 2
					}
				]
			},
			{
				id: 1,				
				title: 'Free beer tomorrow!',
				authorId: 1,
				votes: 15,
				deleted: true,
				comments: [
					{
						id: 0,
						body: "Awesome suggeston!",
						authorId: 2,
						deleted: false,				
						votes: 2
					}
				]
			},
			{
				id: 2,				
				title: 'We should genetically engineer a money tree.',
				authorId: 2,
				deleted: false,
				votes: 10,
				comments: [
					{
						id: 0,
						body: "Sounds, great but could be tricky.",				
						authorId: 1,
						deleted: false,
						votes: 2
					},
					{
						id: 1,
						body: "Oh come on.",
						authorId: 4,
						deleted: false,				
						votes: -1						
					}
				]
			}			
		] 
	};
	return demoSuggestions.suggestions;
}]);