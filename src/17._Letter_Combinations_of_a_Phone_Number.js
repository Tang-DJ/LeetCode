// 17. Letter Combinations of a Phone Number
// Medium
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
//
//     A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
//
//
//
//     Example:
//
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
//     Note:
//
// Although the above answer is in lexicographical order, your answer could be in any order you want.
//

/**
 * @param {string} digits
 * @return {string[]}
 * beat 93%
 */
var letterCombinations = function(digits) {
    let exp = [[],[],['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']];
    let nums = digits.split('');
    function bfs(nums,index,result,max) {
        if(index===max)
            return result;
        if(index===0)
            return bfs(nums,index+1,exp[nums[index]],max);
        let temp = [];
        for(let n of result){
            for(let i of exp[nums[index]]) {
                temp.push(n + i);
            }
        }
        return bfs(nums,index+1,temp,max);
    }
    return bfs(nums,0,[],nums.length);
};


// /**
//  * @param {string} digits
//  * @return {string[]}
//  * 优化方案：switch优化
//  */
// var letterCombinations = function(digits) {
//     let two = ['a','b','c'];
//     let three = ['d','e','f'];
//     let four = ['g','h','i'];
//     let five = ['j','k','l'];
//     let six = ['m','n','o'];
//     let seven = ['p','q','r','s'];
//     let eight = ['t','u','v'];
//     let nine = ['w','x','y','z'];
//     let nums = digits.split('');
//     nums = nums.map((value) => {
//         switch (value) {
//             case '2': return two;
//             case '3': return three;
//             case '4': return four;
//             case '5': return five;
//             case '6': return six;
//             case '7': return seven;
//             case '8': return eight;
//             case '9': return nine;
//             default: return;
//         }
//     });
//
//     function bfs(nums,index,result,max) {
//         if(index===max)
//             return result;
//         if(index===0)
//             return bfs(nums,index+1,nums[0],max);
//         let temp = [];
//         for(let n of result){
//             for(let i of nums[index]) {
//                 temp.push(n + i);
//             }
//         }
//         return bfs(nums,index+1,temp,max);
//     }
//     return bfs(nums,0,[],nums.length);
// };

let result = letterCombinations('23');
console.log(result);
