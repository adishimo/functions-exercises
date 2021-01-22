//Question 1
function myReverse(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString; 
}
myReverse("adi");

//Question 2
function allCombinations() {
  var buff = [];
var res = [];
for (i=0;i<s.length;i++){
    buff = [s[i]];
    var index=0;
    while(res[index]){
        buff.push(''+res[index]+s[i]);
        index++;
    }
    res = res.concat(buff);
}
return res;
}
 

//Question 3
function allCaps(str) {
  let wordsArray = str.toLowerCase().split(' ')
  let capsArray = []

  wordsArray.forEach(word => {
      capsArray.push(word[0].toUpperCase() + word.slice(1))
  });

  return capsArray.join(' ')
}

//Question 4
function myPower(x, n) {
  let num = Math.pow(base, exponent);
  return num;
}
myPower(2,3)


//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own
 
// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
