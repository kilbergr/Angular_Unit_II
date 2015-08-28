app.directive('rkCaffeineMeter', function(){
	return {
		templateUrl: '../partials/meterDirective.html',
		scope: {
			cafVal: '=caffeinemg'
		},
		link: function(scope, element, attrs){
			// scope.findPoint = {
			// 	$('.gauge--3 .semi-circle--mask').attr({
   // 			 style: '-webkit-transform: rotate(' + cafVal + 'deg);' +
   // 			 '-moz-transform: rotate(' + cafVal + 'deg);' +
   //  		'transform: rotate(' + cafVal + 'deg);'
   // 					});				
			// 	}
			}
	}
})
