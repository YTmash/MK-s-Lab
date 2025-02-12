let input = "I want to go to the bathroom.";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

// Outer loop: Iterate through each character of the input string
for (let i = 0; i < input.length; i++) {
  let letter = input[i].toLowerCase(); // Convert to lowercase for comparison

  // Check if the letter is 'e', 'u', or 'o' and add to resultArray if true
  if (letter === 'e' || letter === 'u' || letter === 'o') {
    resultArray.push(letter, letter); // Add the letter to resultArray
  }

  // Inner loop: Iterate through each vowel
  for (let j = 0; j < vowels.length; j++) {
    // Check if the current letter matches the current vowel
    if(letter === 'u') {
      resultArray.push(letter, letter);
    }
    else {
      resultArray.push(letter);
    }
    if (letter === vowels[j]) {
      resultArray.push(letter); // Add the vowel to resultArray
      console.log("Match found:", letter); // Log the found vowel
    }
  }
}

let resultString = resultArray.join('').toUpperCase();
console.log(resultString);
console.log("Result Array:", resultArray); // Output the result array with found vowels