app.factory('suggestions',[function() {
	var demoSuggestions = {
		suggestions: [
			{
				id: 0,
				title: "Come Friday afternoon when everyone has worked hard we should all get free ice cream to round off the week on a high, how's with me?",
				votes: 20,
				comments: [
					{
						body: "Awesome idea!",
						votes: 5
					},
					{
						body: "Never gonna happen.  This will totally never happen dude.  I can eat gallons of Ice cream and its likely to cost the business a fortune and make me ill.",
						votes: 3
					},
					{
						body: "Can we also have sprinkles?",				
						votes: 2
					}
				]
			},
			{
				id: 1,				
				title: 'Free beer tomorrow!',
				votes: 15,
				comments: [
					{
						body: "Awesome suggeston!",				
						votes: 2
					}
				]
			},
			{
				id: 2,				
				title: 'We should genetically engineer a money tree.',
				votes: 10,
				comments: [
					{
						body: "Sounds, great but could be tricky.",				
						votes: 2
					},
					{
						body: "Oh come on.",				
						votes: -1						
					}
				]
			}			
		] 
	};
	return demoSuggestions.suggestions;
}]);