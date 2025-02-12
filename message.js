// Arrays

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push('to, Program')

secretMessage['easily'] = 'right';
secretMessage.shift();

secretMessage.unshift('Programming');

secretMessage[7] = 'right';

secretMessage.splice(6, 5, "know");

secretMessage.join();
console.log(secretMessage);