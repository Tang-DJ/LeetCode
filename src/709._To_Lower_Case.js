// 709._To_Lower_Case
// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
// //
// //
// //
// //     Example 1:
// //
// // Input: "Hello"
// // Output: "hello"
// // Example 2:
// //
// // Input: "here"
// // Output: "here"
// // Example 3:
// //
// // Input: "LOVELY"
// // Output: "lovely"

/**
 * @param {string} str
 * @return {string}
 */
let toLowerCase = function(str) {
    let re = str.split('').map(value => {
        if(value>='A'&&value<='Z'){
            return String.fromCharCode(value.charCodeAt(0)+32);
        }
        return value;
    });
    return re.join('');
};

let result = toLowerCase('LOVELY');
console.log(result);