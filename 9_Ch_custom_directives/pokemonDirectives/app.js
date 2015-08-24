var app = angular.module('pokemonDirectiveApp', []);

app.controller('PokemonController', ['$scope', '$http', function($scope, $http){
	$scope.pokemons = [];

	$scope.getPokemons = function(){
		$http.get('http://pokeapi.co/api/v1/pokedex/1/')
		.then(function(data){
			$scope.allPokemons = data.data.pokemon;
			$scope.chooseFive($scope.allPokemons, $scope.pokemons);
			$scope.individualInfo($scope.pokemons);
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

	$scope.individualInfo = function(chosenArr){
		chosenArr.forEach(function(pokemon){
			$http.get('http://pokeapi.co/'+ pokemon.resource_uri)
			.then(function(data){
			$scope.pokemon = data.data;
			})
		});
	}
		

$scope.getPokemons();


}]);

app.directive('rkPokemonDetails', function(){
	return{
		templateUrl: 'pokemon-details.html',
		scope: {
			pokemon: '=pokemonData'
		}
	};
})