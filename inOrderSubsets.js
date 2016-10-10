function rIOS(str, substr, arr) {
	arr = arr || []
	substr = substr || ""
	if(str == ""){
		arr.push(substr)
		return
  }

	var x = str[0]
	var newStr = str.slice(1)
  rIOS(newStr, substr + x, arr)
  rIOS(newStr, substr, arr)

  return arr
}

console.log(rIOS("abc"))

// function getAllCombinationsOfASet(text) {
//   var results = [];
//   for (var i = 0; i < text.length; i++) {
//     // Record size as the list will change
//     var resultsLength = results.length;
//     for (var j = 0; j < resultsLength; j++) {
//       results.push(results[j] + text[i]);
//     }
//     results.push(text[i]);
//   }
//   return results;
// }

// console.log(getAllCombinationsOfASet("cat"))