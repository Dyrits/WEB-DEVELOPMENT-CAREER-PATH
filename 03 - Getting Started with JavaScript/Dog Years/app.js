// myAge is my age... 
let myAge = 31;

// The value saved to this variable will change...
let earlyYears = 2;

earlyYears *= 10.5;

let laterYears = myAge - 2;

// Number of dog years accounted for by your later years...
laterYears *= 4;

console.log(earlyYears)
console.log(laterYears)

// This really needs to be explained?
let myAgeInDogYears = earlyYears + laterYears;

// myName is my name, in lowercase...
let myName = "Dylan J. Gerrits".toLowerCase()

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)