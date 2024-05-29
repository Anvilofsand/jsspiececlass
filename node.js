
let a = 10; 

let b = 20; 

let c = 30; 


console.log(a); // 10 

console.log(b); // 20 

console.log(c); // 30 

let sum = a + b; 

console.log(sum); // 30 

let difference = c - b; 

console.log(difference); // 10 

let product = a * c; 

console.log(product); // 300 

let quotient = c / a; 

console.log(quotient); // 3 

let remainder = b % a; 

console.log(remainder); // 0 

a += 5; 

console.log(a); // 15 

a -= 3; 

console.log(a); // 12 

a *= 2; 

console.log(a); // 24 

a /= 4; 

console.log(a); // 6 

a %= 5; 

console.log(a); // 1 

let x = a + b; 

let y = b * c; 

console.log(x); // x = 1 + 20 = 21 

console.log(y); // y = 20 * 30 = 600 

function calculate(num1, num2) { 

    return { 

        sum: num1 + num2, 

        difference: num1 - num2, 

        product: num1 * num2, 

        quotient: num1 / num2, 

        remainder: num1 % num2 

    }; 

} 

let results = calculate(25, 4); 

console.log(results);  

// { 

//     sum: 29, 

//     difference: 21, 

//     product: 100, 

//     quotient: 6.25, 

//     remainder: 1 

// } 
