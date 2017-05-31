
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


function fearNotLetter(str){
			var i = str.length - 1;
			while(i >= 0){
				if(str.charCodeAt(i--) != str.charCodeAt(i) + 1){
					return String.fromCharCode(str.charCodeAt(i) + 1)
				}
			}
		}


function boo(bool){
			return bool === true || bool === false
		}


function unite(){
			var arr = []
			for(var i = 0; i<arguments.length; i++){
				arguments[i].map(function(item){
					if(arr.indexOf(item) === -1){
						arr.push(item)
					}
				})
			}
			return arr
		}
