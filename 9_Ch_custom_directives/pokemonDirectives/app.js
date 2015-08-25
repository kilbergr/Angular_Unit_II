var app = angular.module('pokemonDirectiveApp', []);

app.controller('PokemonController', ['$scope', '$http', function($scope, $http){
	$scope.pokemons = [];
	$scope.chosenPokemons = [];

	$scope.getPokemons = function(){
		$http.get('http://pokeapi.co/api/v1/pokedex/1/')
		.then(function(data){
			$scope.allPokemons = data.data.pokemon;
			$scope.chooseFive($scope.allPokemons, $scope.pokemons);
			$scope.pokemons.forEach(function(pokemon){
				$scope.individualInfo(pokemon, $scope.chosenPokemons)
			});
			// $scope.getImage($scope.chosenPokemons);
		})
	};

	$scope.chooseFive = function(pokeArr, chosenArr){
		i=0;
		while(i<5){
			var num = Math.floor(Math.random() * pokeArr.length) + 1 ;
			if(pokeArr[num]){
				chosenArr.push(pokeArr[num]);
				i+=1;
			};
		};
	};


	$scope.individualInfo = function(pokemon, chosenArr){
		 // origArr.forEach(function(pokemon){
			// for(var i = 0; i < origArr.length; i++){
			$http.get('http://pokeapi.co/'+ pokemon.resource_uri)
			.then(function(data){
			  pokemon.details = (data.data);
			  if(data.data.sprites[0]){
			  	$http.get('http://pokeapi.co' + data.data.sprites[0].resource_uri)
			  	.then(function(sprite){
			  		pokemon.image =  'http://pokeapi.co/'+ sprite.data.image;	
			  		chosenArr.push(pokemon);
			  		})
			 		}
			  })
		// } 
		// );
	// $scope.getImage($scope.chosenPokemons);
	return chosenArr;
	}
		

	// $scope.getImage = function(chosenArr){
	// 	debugger;
	// 	chosenArr.forEach(function(pokemon){
	// 		$http.get('http://pokeapi.co/' + pokemon.sprites[0].resource_uri)
	// 		.then(function(data){
	// 			pokemon.pokeImg = 'http://pokeapi.co/' + data.data.image;
	// 			debugger;
	// 			return pokeImg;
	// 		})
	// 	})
	// };

$scope.getPokemons();



}]);

app.directive('rkPokemonDetails', function(){
	return{
		templateUrl: 'pokemon-details.html',
		scope: {
			pokemons: '=pokemonData'
		}
	};
})