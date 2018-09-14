// Find the length of the longest substring T of a given string (consists of lowercase letters only) such that every character in T appears no less than k times.
//
//     Example 1:
//
// Input:
//     s = "aaabb", k = 3
//
// Output:
//     3
//
// The longest substring is "aaa", as 'a' is repeated 3 times.
//     Example 2:
//
// Input:
//     s = "ababbc", k = 2
//
// Output:
//     5
//
// The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.

//"ababacb" 3 结果为0  理解题目错误
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    var hash = {};
    var temp = s.split('');
    var sum=0;
    for(var i=0;i<temp.length;i++){
        if(!hash[s[i]])
            hash[s[i]]=1;
        else hash[s[i]]++;
    }
    for(var value in hash){
        if(hash[value]>=k)
            sum+=hash[value];
    }
    return sum;
};

longestSubstring('ababb',2);