import { capitalize, reverse, contain } from './string-utilities.js';

console.log(capitalize("hello-world"));   // "Hello-world"
console.log(reverse("whitecat"));         // "tacehtiw"
console.log(contain("cat", "whitecat"));  // true
console.log(contain("dog", "whitecat"));  // false
