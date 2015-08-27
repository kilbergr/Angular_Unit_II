var app = angular.module('carouselApp', []);
app.controller('CarouselController', ['$scope', function($scope){
		$scope.images = ["http://www.awesomeinventions.com/wp-content/uploads/2014/10/marble-caves-patagonia.jpg", 
									"http://media-cdn.tripadvisor.com/media/photo-s/02/b2/c8/4d/chillagoe-cabins.jpg", 
									"http://iliketowastemytime.com/sites/default/files/mellisani_cave_greece2.jpg", 
									"http://ukrainetrek.com/blog/wp-content/uploads/2011/10/marble-cave-crimea-ukraine-view-1.jpg"];
	
}])

app.directive('rkCarouselDirective', function(){
	return {
		templateUrl: 'carouselDirective.html',
		scope: {
				imagesDirective: '=imagesController'
		},
		link: function(scope, element, attrs){
			scope.count = 0;

			scope.addOne = function(){
				scope.count+=1;
				scope.numRotate();
		}

			scope.removeOne = function(){
				scope.count-=1;
				scope.numRotate();
		}

			scope.numRotate = function(){
				// debugger;
				if (scope.count<0){
					scope.tempCount=(	scope.imagesDirective.length+scope.count);
					scope.count = scope.tempCount;
				}
				else if (scope.count===scope.imagesDirective.length){
					scope.count = 0;
				}
				return scope.count
			}
		}
	}
})
