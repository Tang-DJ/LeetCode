// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

// Example 1:

// Input: "aabcccccaaa"
// Output: "a2b1c5a3"
// Example 2:

// Input: "abbccd"
// Output: "abbccd"
// Explanation: 
// The compressed string is "a1b2c2d1", which is longer than the original string.
//  

// Note:

// 0 <= S.length <= 50000

/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
  let res = '';
  let left = 0;
  for(let i = 1;i<S.length;i++) {
    if(S[i] !== S[left]){
      res += `${S[left]}${i-left}`
      left = i;
    }
  }
  res += `${S[left]}${S.length-left}`
  return res.length < S.length ? res : S;
};

const result = compressString("aabcccccaaa")
console.log(result)