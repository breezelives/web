function where(collection, source){
	var arr = []
	collection.map(function(item){
		var sign = 1
		Object.keys(source).map(function(v){
			if (!item.hasOwnProperty(v) || source[v] != item[v]) sign = 0
		})
		if(sign === 1) arr.push(item)
	})
    return arr
}

function myReplace(str, before, after){
	var firstLetter = before.charAt(0)
	if(firstLetter >= 'A' && firstLetter <= 'Z' ) {
		after = after[0].toUpperCase() + after.substr(1)
	}
	return str.replace(before, after)
}
