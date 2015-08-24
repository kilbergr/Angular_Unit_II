var app = angular.module('yoyoDirectiveApp', [])

app.controller('YoyoController', ['$scope', function($scope) {
  // $scope.yoyo={name: 'Duncan Metal Drifter',
  //   img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"};
  
  $scope.yoyos = [
  {name: 'Duncan Metal Drifter',
    img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"},
  {name: 'Purple Yoyo',
    img: "http://yoyobestbuy.com/wp-content/uploads/Magic-YoYo-Purple-Line-Blue-Silver-Speckle-2.jpg"},
  {name: 'Orange Yoyo',
    img: "http://lghttp.13060.nexcesscdn.net/80647E/magento/media/catalog/product/cache/3/image/600x600/9df78eab33525d08d6e5fb8d27136e95/c/o/cocacola2009-fanta11.jpg"},
  {name: 'Special Yoyo',
    img: "http://i00.i.aliimg.com/wsphoto/v0/1915944760/2014-New-Arrival-Hot-Sales-Magic-font-b-YoYo-b-font-T8-Aluminum-Metal-Professional-Yo.jpg"},
  ];
}]);

app.directive('gsYoyoDetails', function() {
  return {
    templateUrl: 'yoyo-details.html',
    scope: {
      yoyos: '=yoyoData'
    }
  };
});