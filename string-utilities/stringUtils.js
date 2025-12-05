// Capitalize the first letter of a string
export function capitalize(string) {
    if (!string) return "";
    string = string.trim(); // remove extra whitespace
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Reverse a string
export function reverse(string) {
    if (!string) return "";
    return string.split("").reverse().join("");
}

// Check if substring exists in a string
export function contain(string, substring) {
    if (!string || !substring) return false;
    return string.includes(substring);
}
