function Censor(str, word) {
	var CensorWord = ""
	var pos = str.indexOf(word)
	for (var i = 0; i < word.length; i++) {
		CensorWord += "*"
	}
	while(pos > -1){
		var newstr = ""
		for(var i=0; i<str.length; i++){
			if(i == pos){
				newstr += CensorWord
				i += word.length
			}
			newstr += str[i]
		}
		str = newstr
		pos = str.indexOf(word)
	}
	console.log(str)
}

Censor('How can its saddening politician fail in the literature?', 'it')

function Censor2(str, word){
  var pos = str.indexOf(word);
  while(pos > -1){
    var newstr = "";
    for(var i=0; i<str.length; i++){
      if(i == pos){
        for (var j = 0; j < word.length; j++){
          newstr += "*";
        }
        i += word.length;
      }
      newstr += str[i];
    }
    str = newstr
    pos = str.indexOf(word);
  }
  console.log(newstr);
}

Censor2('How can its saddening politician fail in the literature?', 'it')
