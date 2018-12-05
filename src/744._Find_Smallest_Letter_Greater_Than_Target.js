// 744. Find Smallest Letter Greater Than Target
// Easy
// Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, find the smallest element in the list that is larger than the given target.
//
//     Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.
//
//     Examples:
// Input:
//     letters = ["c", "f", "j"]
// target = "a"
// Output: "c"
//
// Input:
//     letters = ["c", "f", "j"]
// target = "c"
// Output: "f"
//

// Input:
//     letters = ["c", "f", "j"]
// target = "d"
// Output: "f"
//
// Input:
//     letters = ["c", "f", "j"]
// target = "g"
// Output: "j"
//
// Input:
//     letters = ["c", "f", "j"]
// target = "j"
// Output: "c"
//
// Input:
//     letters = ["c", "f", "j"]
// target = "k"
// Output: "c"
// Note:
//     letters has a length in range [2, 10000].
//     letters consists of lowercase letters, and contains at least 2 unique letters.
//     target is a lowercase letter.


//Input
// ["e","e","e","e","e","e","n","n","n","n"]
// "r"
// Expected
// "e"

// Input
//     ["e","e","e","e","e","e","n","n","n","n"]
// "n"
// Expected
// "e"

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 * 优化之后，但是速度没有下面的方法快
 */
var nextGreatestLetter = function(letters, target) {

    let high =letters.length , low = 0;
    while(low<high){
        let mid = low + Math.floor((high-low)/2);
        if(target < letters[mid])
            high = mid;
        else low = mid +1;
    }
    return letters[low%letters.length];
};

// /**
//  * @param {character[]} letters
//  * @param {character} target
//  * @return {character}
//  * 因为输入的letter是排序后的，所以可以进一步优化
//  * 寻找target的值，算出每个值与target的距离，找到最近的距离
//  */
// var nextGreatestLetter = function(letters, target) {
//     target = target.charCodeAt();
//     let temp = letters.map((value => {
//         let t = value.charCodeAt() - target;
//         t = t<0?t+26:t;
//         return t === 0 ?26:t;
//     }));
//     return letters[temp.indexOf(Math.min(...temp))];
// };
console.time()
let result = nextGreatestLetter(["c", "f", "j"],'j');
console.timeEnd()
console.log(result);
