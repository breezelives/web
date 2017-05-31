
function translate(str){
			var vowels = ['a', 'e', 'i', 'o', 'u']
			if(vowels.indexOf(str[0]) === -1){
				while(vowels.indexOf(str[0]) === -1){
					str = str.substr(1) + str[0]
				}
			} else {
				str += 'w'
			}
			return str + 'ay';
		}
