// This variable is my age
var myAge = 28;

// This variable is 2 years
var earlyYears = 2;

earlyYears *= 10.5;

// this is to acount for the first two years
var laterYears = myAge - 2;

// multiply the me my age by 4
laterYears *= 4;

// final calculation to dog years
var myAgeInDogYears = earlyYears + laterYears;

// To lowercase returns a sting method with all lowercase letters
var myName = 'Cheyanne'.toLowerCase();

// states name age in human and dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
