app.controller("postController", function($scope){
	'use strict';
	$scope.posts = [
		{title: "Jon Bon Jovi", content: "Is from New Jersey but he's an American treasure", image: "http://i.telegraph.co.uk/multimedia/archive/02510/Bonjovimain_2510281b.jpg", author: "Not Jon Bon Jovi", date: "Thu Aug 13 2015 17:03:37 GMT-0700 (PDT)", comments: [{author: "Fanface", content: "OMG I LOVE JBJ! WAY MORE THAN LBJJJJJ!"}], votes: 3, showCommentForm: false, showComments: false},
		{title: "Kristen Ritter", content: "Is a celebrity who I don't hate. She seems pretty okay. But how do you ever really know?", image: "http://www.nerdcoremovement.com/wp-content/uploads/2014/12/krysten-ritter-celebrity-hd-wallpaper-1920x1200-2231.jpg", author: "Selena Gomez", date: "Mon Aug 10 2015 17:03:37 GMT-0700 (PDT)", comments: [{author: "Cats", content: "Meow meow meow"}, {author: "Other Cats", content: "Meow Meow Meow Meow"}], votes: 5, showCommentForm: false, showComments: false},
		{title: "Bird Cages", content: "Some people keep empty bird cages in their houses as design elements. Which is, like, fine I guess but why? Really. Why.", image: "http://schools.lcss.us/lhsve/components/com_virtuemart/shop_image/product/Bird_Cage_530e18476aad9.jpg", author: "Tweety Bird", date: "Thu Aug 13 2015 12:03:37 GMT-0700 (PDT)", comments: [{author: "Daffy Duck", content: "Quack"}], votes: -1, showCommentForm: false, showComments: false}
	];

	$scope.addPost = function(){
		if ($scope.post.title && $scope.post.content && $scope.post.image){
			$scope.posts.push({
				title: $scope.post.title,
				content: $scope.post.content,
				image: $scope.post.image,
				author: $scope.post.author,
				date: new Date(),
				comments: [],
				showCommentForm: false,
				showComments: false,
				votes: 0})
				if($scope.posts[$scope.posts.length-1]){
					$scope.post.title = '';
					$scope.post.author = '';
					$scope.post.content = '';
					$scope.post.image = '';
			}
		}
		else {
			alert("Please fill in all fields!")
		}
	}

	$scope.addComment = function(){
		this.post.comments.push({
			author: this.post.comment.author,
			content: this.post.comment.content
		})
		this.post.comment.author = '';
		this.post.comment.content = '';
		// console.log(this.post.comments);
	}

	$scope.addVote = function(){
		this.post.votes +=1;
	}
	$scope.removeVote = function(){
		this.post.votes -=1;
	}
})
