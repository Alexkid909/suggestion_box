app.factory('suggestions',[function() {
	var demoSuggestions = {
		suggestions: [
			{
				id: 0,
				title: "Come Friday afternoon when everyone has worked hard we should all get free ice cream to round off the week on a high, how's with me?",
				authorId: 0,
				votes: 20,
				comments: [
					{
						body: "Awesome idea!",
						authorId: 3,
						votes: 5
					},
					{
						body: "Never gonna happen.  This will totally never happen dude.  I can eat gallons of Ice cream and its likely to cost the business a fortune and make me ill.",
						authorId: 2,
						votes: 3
					},
					{
						body: "Can we also have sprinkles?",
						authorId: 4,				
						votes: 2
					}
				]
			},
			{
				id: 1,				
				title: 'Free beer tomorrow!',
				authorId: 1,
				votes: 15,
				comments: [
					{
						body: "Awesome suggeston!",
						authorId: 2,				
						votes: 2
					}
				]
			},
			{
				id: 2,				
				title: 'We should genetically engineer a money tree.',
				authorId: 2,
				votes: 10,
				comments: [
					{
						body: "Sounds, great but could be tricky.",				
						authorId: 1,
						votes: 2
					},
					{
						body: "Oh come on.",
						authorId: 4,				
						votes: -1						
					}
				]
			}			
		] 
	};
	return demoSuggestions.suggestions;
}]);