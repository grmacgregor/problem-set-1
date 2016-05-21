// 1.

function letterCapitalize(str) {
	var strArray = str.split(" ");
	for (var i=0; i<strArray.length; i++) {
		strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
	}
	var capStr = strArray.join(' ');
	return capStr;
}

console.log(letterCapitalize("this is a test"));

// 2.

function wordCount(str) {
	var newArray = str.split(" ");
	return newArray.length;
}

console.log(wordCount("this is a test"));

// 3.

function primeTime(num) {
	var a = Math.sqrt(num);
	for(var i=2; i<=a; i++) {
		if (num%i == 0) {
			return false;
		} else {
			return true;
		}
	}
}

console.log(primeTime(26)); //Should be false
console.log(primeTime(13)); //Should be true
console.log(primeTime(14)); //Should be false
console.log(primeTime(29)); //Should be true