let myAge = 25;
console.log(myAge);

// My Early Years
let earlyYears = 2;
console.log(earlyYears);

earlyYears = earlyYears *= 10.5;
console.log(earlyYears)

// Later Years
let laterYears = myAge -= 2;
console.log(laterYears);


// Later Years converted into Dog Years
let myDogYears = laterYears *= 4;
console.log(myDogYears);


console.log(laterYears);
console.log(earlyYears);

// My Age in Dog Years
let myAgeInDogYears = laterYears + earlyYears;
console.log(myAgeInDogYears);

// My Name in lowercase
let myName = 'MK'.toLowerCase();
console.log(myName);


// Print Statement
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);