app.controller("ProjectsController", function($scope){
	$scope.projects = [
		{ 
			title: 'Poison, dear',
			description: 'This app allows users to search the FDA\'s food recall database by location, food type, or date of recall. Users can map recall distributions and save recalls for later use.',
			github: 'https://github.com/kilbergr/goodFood',
			deployed: 'http://bad-food.herokuapp.com',
			composition: 'JavaScript, CSS, HTML'
		},
		{
			title: 'twixt',
			description: 'twixt facilitates event planning with friends. Add items or tasks to shared to-do lists and send reminders via text or email.',
			github: 'https://github.com/kilbergr/twixt',
			deployed: 'http://twixt.herokuapp.com',
			composition: 'Ruby, JavaScript, CSS, HTML'
		},
		{
			title: 'High Five',
			description: 'Pair programming isn\'t the only reason you deserve a high five. Get one from a furry friend with this amusing app.',
			github: 'https://github.com/kilbergr/Gimme-Five',
			deployed: 'http://kilbergr.github.io/Gimme-Five/',
			composition: 'JavaScript, CSS, HTML'
		}
	]
})
