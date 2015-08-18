app.filter('kebab', function () {
  return function (input) {
  	var split_input = input.split("_");
  	return split_input.join('-');
  };
});

app.filter('camel', function(){
	return function(input){
		if (input.indexOf("_")!= -1){
			var splitInput = input.split("_");
		}
		else if (input.indexOf("-")!= -1){
			var splitInput = input.split('-');
		}
		var arr = [splitInput[0]];
		for(var i=1; i<splitInput.length;i++){
			var addWord = splitInput[i].charAt(0).toUpperCase() + splitInput[i].slice(1);
			arr.push(addWord);
		}
		return arr.join("");
	}
})

app.filter('piglatin', function(){
	return function(input){
		var pigArr = [];
		var arr = input.split(" ");
		for (var i = 0; i < arr.length; i++){
			if( arr[i].charAt(0) == "a" || arr[i].charAt(0) == "e" || arr[i].charAt(0) == "i" || arr[i].charAt(0) == "o" || arr[i].charAt(0) == "u" ){
				arr[i] = arr[i]+"yay";
				pigArr.push(arr[i]); 
			}
			else if (arr[i].charAt(1) == "a" || arr[i].charAt(1) == "e" || arr[i].charAt(1) == "i" ||arr[i].charAt(1) == "o" || arr[i].charAt(1) == "u"){
				var strRemnant = arr[i].slice(-(arr[i].length-1));
				arr[i] = strRemnant + arr[i].charAt(0, 1) + "ay";
				pigArr.push(arr[i]);
			}
			// because of special y rule for two characters
			else if (arr[i].charAt(2) == "a" || arr[i].charAt(2) == "e" || arr[i].charAt(2) == "i" ||arr[i].charAt(2) == "o" || arr[i].charAt(2) == "u" || arr[i].charAt(2)=="y"){
				var strRemnant = arr[i].slice(-(arr[i].length-2));
				var firstLtrs = arr[i].slice(0, 2);
				arr[i] = strRemnant + firstLtrs + "ay";
				pigArr.push(arr[i]);
			}
			else if (arr[i].charAt(3) == "a" || arr[i].charAt(3) == "e" || arr[i].charAt(3) == "i" ||arr[i].charAt(3) == "o" || arr[i].charAt(3) == "u" || arr[i].charAt(3)=="y"){
				var strRemnant = arr[i].slice(-(arr[i].length-3));
				var firstLtrs = arr[i].slice(0, 3);
				arr[i] = strRemnant + firstLtrs + "ay";
				pigArr.push(arr[i]);
			}
		}
		return pigArr.join(" ");
	}
})