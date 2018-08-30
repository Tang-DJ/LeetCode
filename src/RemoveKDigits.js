//
// Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.
//
//     Note:
// The length of num is less than 10002 and will be ≥ k.
//     The given num does not contain any leading zero.
//     Example 1:
//
// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
//     Example 2:
//
// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
//     Example 3:
//
// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    var list = num.split('');
    if(num.length === k)
        return '0';
    if(num.length === k+1){
        var min = list[0];
        for(var l=0;l<num.length;l++){
            min = list[l]<min?list[l]:min;
        }
        return min;
    }

    if(k===0)
        return num;
    var del = 0;
    var re='';
    for(var i =0;i<list.length-1;i++){
        if(list[i]>list[i+1]){
            list[i] = -1;
            del++;
            if(del===k){
                break;
            }
        }else if(list[i]<list[i+1]){
            list[i+1] = -1;
            del++;
            if(del===k){
                break;
            }
        }
    }
    list.filter(function (value) {
        if(!(re.length==0&&value==0))
          if(value>=0)
            re+=value;
    });

    if(del!==k)
        re = re.slice(0,-k);
    if(re.length==0)
        re = 0;
    return re.toString();
};

console.log(removeKdigits("10200",1));