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
			scope.thumbOne = 0;
			scope.thumbTwo = 1;
			scope.thumbThree = 2;
			scope.thumbFour = 3;
			scope.thumbFive = 4;

			scope.addOne = function(){
				scope.count+=1;
				scope.thumbOne+=1;
				scope.thumbTwo+=1;
				scope.numRotate();
				scope.thumbRotate();
		}

			scope.removeOne = function(){
				scope.count-=1;
				scope.thumbOne -=1;
				scope.thumbTwo -=1;
				scope.numRotate();
				scope.thumbRotate();
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

			scope.thumbRotate = function(){
				// debugger;
				if (scope.thumbOne<0){
					scope.tempThumbOne=(	scope.imagesDirective.length+scope.thumbCount);
					scope.thumbCount = scope.tempthumbCount;
				}
				else if (scope.thumbCount===scope.imagesDirective.length){
					scope.thumbCount = 0;
				}
				return scope.thumbCount
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