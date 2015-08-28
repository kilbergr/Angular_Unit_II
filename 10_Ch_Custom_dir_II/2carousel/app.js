var app = angular.module('carouselApp', []);
app.controller('CarouselController', ['$scope', function($scope){
		$scope.thumbs = ["http://www.awesomeinventions.com/wp-content/uploads/2014/10/marble-caves-patagonia.jpg", 
									"http://media-cdn.tripadvisor.com/media/photo-s/02/b2/c8/4d/chillagoe-cabins.jpg", 
									"http://iliketowastemytime.com/sites/default/files/mellisani_cave_greece2.jpg", 
									"http://s3-media1.fl.yelpcdn.com/bphoto/KGG6bvP-mUC3v6YWxhmuhg/ls.jpg",
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

			scope.steps = [3, 4, 0, 1, 2 ]
			scope.stepCount = 0;

			scope.addOne = function(){
				scope.count+=1;
				scope.stepCount+=1;
				scope.numRotate();
				scope.stepRotate();
				console.log(scope.stepCount);
		}

			scope.removeOne = function(){
				scope.count-=1;
				scope.stepCount-=1;
				scope.numRotate();
				scope.stepRotate();
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

			scope.stepRotate = function(){
				// debugger;
				if (scope.stepCount<0){
					scope.tempStepCount=(	scope.imagesDirective.length+scope.stepCount);
					scope.stepCount = scope.tempStepCount;
				}
				else if (scope.stepCount===scope.imagesDirective.length){
					scope.stepCount = 0;
				}
				return scope.stepCount
			}
		}
	}
})

// app.directive('rkThumbnailDirective', function(){
// 	return {
// 		templateUrl: 'carouselDirective.html',
// 		scope: {
// 				thumbsDirective: '=thumbsController'
// 		},
// 		link: function(scope, element, attrs){
// 			scope.count = 0;

// 			scope.addOne = function(){
// 				scope.count+=1;
// 				scope.numRotate();
// 		}

// 			scope.removeOne = function(){
// 				scope.count-=1;
// 				scope.numRotate();
// 		}

// 			scope.numRotate = function(){
// 				// debugger;
// 				if (scope.count<0){
// 					scope.tempCount=(	scope.thumbsDirective.length+scope.count);
// 					scope.count = scope.tempCount;
// 				}
// 				else if (scope.count===scope.thumbsDirective.length){
// 					scope.count = 0;
// 				}
// 				return scope.count
// 			}
// 		}
// 	}
// })