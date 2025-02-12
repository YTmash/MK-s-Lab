let kelvin = 0;
console.log(kelvin);

// Temperature in Celsius
const celsius = (kelvin - 273);
console.log(celsius);

// Temperature in Fahrenheit
let fahrenheit = (celsius * 9/5 + 32);
console.log(fahrenheit);


// Celsius to Fahrenheit
fahrenheit = Math.floor(fahrenheit);

// Celsius to Newton
let newton = celsius * 33/100;
console.log(newton);

// Kelvin to Fahrenheit
console.log(kelvin)

// Template literals
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);