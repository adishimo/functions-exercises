//Question 1
function myReverse(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString; 
}
console.log(myReverse("adi"));

//Question 2
function allCombinations(str) {
  let combinations = [];
  let i = 0;
  let lenStr = str.length;
  while (i < lenStr) {
    let j = str[i];
    let x;
    let arrTemp = [j];
    for (x in combinations) {
      arrTemp.push("" + combinations[x] + j);
    }
    combinations = combinations.concat(arrTemp);
    i++;
  }
  return combinations;
}
console.log(allCombinations("dog"));

//Question 3
function allCaps(str) { // str = "a very long daY"
  let wordsArray = str.toLowerCase().split(' ') // ["a", "very", "long", "day"]
  let capsArray = []
  function blabla(word){
    capsArray.push(word[0].toUpperCase() + word.slice(1)) //word[0] = v, V, word.slice(1) = ery, Very

  }
  wordsArray.forEach(blabla);

  return capsArray.join(' ') // "A Very Long Day"
}

//Question 4
function myPower(x, n) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans *= x;
  }
  return ans;
}
console.log(myPower(7, 3));


//Question 5
function getFirstNotRepeating(str) {
  let arr = str.split("");
  let result = "";
  let ctr = 0; 
  for (let i = 0; i < arr.length; i++) {
    ctr = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        ctr += 1;
      }
    }
    if (ctr < 2) {
      result = arr[i];
      break;
    }
  }
  return result;
}
console.log(getFirstNotRepeating("abacddbec"));


//Question 6 (Bonus)
function isPrefectNumber(num) {
  function isPrefectNumber(num) {
    let temp = 0;
    for(let i=1; i<=num/2; i++){
      if(num%i === 0){
        temp += i;
      }
    }
    if(temp === num && temp !== 0){
      console.log("It is a perfect number.");
    } else {
      console.log("It is not a perfect number.");
    }
  }
  isPrefectNumber(28);
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
