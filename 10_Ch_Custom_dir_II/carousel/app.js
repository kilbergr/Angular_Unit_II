var app = angular.module("carouselApp", []);

app.controller('CarouselController', ['$scope', function($scope){
	$scope.images = ["http://www.awesomeinventions.com/wp-content/uploads/2014/10/marble-caves-patagonia.jpg", 
									"http://media-cdn.tripadvisor.com/media/photo-s/02/b2/c8/4d/chillagoe-cabins.jpg", 
									"http://iliketowastemytime.com/sites/default/files/mellisani_cave_greece2.jpg", 
									"http://ukrainetrek.com/blog/wp-content/uploads/2011/10/marble-cave-crimea-ukraine-view-1.jpg"];
	$scope.addOne = function(){

	}
}]);

app.directive('rkCarousel', function(){
	return {
		templateUrl: "images.html",
			scope: {
			next: '=',
			prev: '='
		}
		link: function(scope, element, attrs){

			scope.count = 0;
			
			scope.next = function(){
				element.on('click', function(event){
				scope.count++;
				debugger;
				if (scope.count === scope.images.length-1 || scope.count === -scope.images.length-1){
						scope.count = 0;
					} 
				})
			}

			scope.prev = function(){
				element.on('click', function(event){
					scope.count--;
					if (scope.count === scope.images.length-1 || scope.count === -scope.images.length-1){
						scope.count = 0;
					}
				})
			}


		}
	}
})
