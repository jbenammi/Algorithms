function StringPermiatations(string){
	var subString = string
	var	build = []
	var possible = []
	count = 0
	while(count != string.length){
		build = []
		for(var x = 0; x<string.length; x++){
			build[build.length] = subString[x]
		}
		for(var i=1; i<9; i++){
			for(var j = 1; j<string.length-1; j++){
				var temp = build[j]
				build[j] = build[j+1]
				build[j+1] = temp
				var newString = ""
				for(var k=0; k<build.length; k++){
					newString += build[k]
				}
				possible[possible.length] = newString
			}
		}
		console.log("count", count)
		count ++
		subString = string[count]
		for (var x = 0; x < string.length; x++) {
			if(count != x){
				subString += string[x]
			}
		}
	}

console.log(possible, possible.length)
}
var string = "ABCDE"
// StringPermiatations(string)


function permutations(str){
var arr = str.split(''),
    perms = [],
    rest,
    picked,
    restPerms,
    next;

    if (arr.length == 0)
        return [str];

    for (var i=0; i<arr.length; i++)
    {
        rest = Object.create(arr);
        picked = rest.splice(i, 1);

        restPerms = permutations(rest.join(''));

       for (var j=0; j< restPerms.length; j++)
       {
           next = picked.concat(restPerms[j]);
           perms.push(next.join(''));
       }
    }
   return perms;
}

var answer = permutations(string)
console.log(answer, answer.length)