function sumArr(arr){
	var small = Math.min(arr[0], arr[1]),
		big = Math.max(arr[0], arr[1]),
		sum = 0;
	for(var i=small; i<=big; i++) {
		sum += i;
	}
	return sum;
}
document.write(sumArr([1,6]))

