// app.js
import { capitalize, reverse, contains } from './stringUtils.js';

console.log("=== Testing capitalize ===");
console.log(capitalize("hello world"));        // "Hello World"
console.log(capitalize("javaScript is fun"));  // "JavaScript Is Fun"
console.log(capitalize(""));                   // ""
console.log(capitalize(null));                 // ""

console.log("\n=== Testing reverse ===");
console.log(reverse("whitecat"));              // "tacehtiw"
console.log(reverse(""));                      // ""
console.log(reverse(null));                    // ""

console.log("\n=== Testing contains ===");
console.log(contains("hello world", "world")); // true
console.log(contains("hello world", "cat"));   // false
console.log(contains("", "anything"));         // false
console.log(contains("something", ""));       // true
console.log(contains(null, "test"));           // false
