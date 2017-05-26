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
	if(str[0] >= 'A' && str[0] <= 'Z' ) {
		after = after[0].toUpperCase() + after.substr(1)
	}
	return str.replace(before, after)
}

function pair(str){
	var arr = [],
		DNA = {
		A: 'T',
		T: 'A',
		C: 'G',
		G: 'C'
	}
	str.split('').map(function(item, i){
		arr.push([item, DNA[item]])
	})
	return arr
}
