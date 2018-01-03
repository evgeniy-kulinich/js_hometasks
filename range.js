function range(start, end, step) {

	var newArr = [];

	if (step === undefined) {
		for (var i = start; i < end+1; i += 1) {

			newArr.push(i);
		}
	}else if (typeof step === 'number' && step > 0) {

		for (var i = start; i < end+1; i += step) {

			newArr.push(i);
		}
	}else {

		for (var i = start; i > end-1; i -=1) {

			newArr.push(i)
		};
		
	}
	
	return newArr;
}
range(1, 10, 2) //[1, 3, 5, 7, 9]
range(1, 10, 3) //[1, 4, 7, 10]
range(1, 10)    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
range(10, 2, -1) //[10, 9, 8, 7, 6, 5, 4, 3, 2]
range(12, 3, -1) //[12, 11, 10, 9, 8, 7, 6, 5, 4, 3]





function sum(arr) {
	var sum = 0;
	arr.forEach(function(value, index, arr) {
		return sum+=value;
	})
	console.log(sum)
}


sum(range(1, 10, 1)) //55
sum(range(1, 20, 1)) //210
sum(range(2, 5, 1)) //14
sum(range(1, 10, 2)) // 25