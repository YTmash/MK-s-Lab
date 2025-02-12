// Conditionals

let username = 'Kelly';
username ? console.log(`Hello, ${username}!`) : console.log('Hello!')

let userQuestion = 'Are you an even number';
console.log(userQuestion);

console.log(`${userQuestion}, ${username}?`)

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber)

let eightBall = '';
switch(randomNumber) {
case 0: 
console.log('It is certain')
break;
case 1 :
console.log('It is decidedly so')
break;
case 2 :
console.log('Cannot predict now')
break;
case 3 :
console.log('Do not count it')
break;
case 4:
console.log('Do not count it')
case 5:
console.log('My sources say  no')
break;
default:
console.log('We\'ve fucked up!');
}
console.log(eightBall)