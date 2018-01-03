var str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
var str2 = 'lol lol lol';




function countWordsInString(string) {

	var count = 0;

	var stringToArray = string.split(' ');

	var sumLength = 0;

	for(var i = 0 ; i < stringToArray.length; i +=1) {
		count++;
		sumLength += stringToArray[i].length;
		
	}
	console.log('сума Длинны всех слов '+ sumLength)
	console.log('кол-во слов '+ count)

	var averageLength = sumLength / count;

	console.log('средняя длинна слова '+ averageLength)


	function findNumberOfLetter(letter, string) {

		if (string.match(/letter/gi) != null) {
			string.match(/letter/gi).forEach(function(value, index, arr) {
				console.log('кол-во букв "а" ' + arr.length)
		});
		} else {
			console.log('здесть нет букв "а"')
		}

	}

	findNumberOfLetter('a', string)

}
countWordsInString(str);
countWordsInString(str2);
