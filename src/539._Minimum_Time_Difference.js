// Given a list of 24-hour clock time points in "Hour:Minutes" format, find the minimum minutes difference between any two time points in the list.
//     Example 1:
// Input: ["23:59","00:00"]
// Output: 1
// Note:
//     The number of time points in the given list is at least 2 and won't exceed 20000.
// The input time is legal and ranges from 00:00 to 23:59.

/**
 * @param {string[]} timePoints
 * @return {number}
 */

// 将所有时间转换成分钟数，然后进行sort排序
// 计算两个数之间的差值，找出最小差值即可
// 不要忘记第一个时间与最后一个时间相比较

//["00:00","23:59","00:00"] Expected:0  没有考虑多个时间的问题
//["05:31","22:08","00:35"] Expected:147 没有对比首尾时间
//["07:56","19:58","19:12","01:59","04:27"] Expected: 46 没有重写sort方法
var findMinDifference = function(timePoints) {
    var dayTime = 24*60;
    var minTime = 24*60;
    var temp = timePoints.map(function (value) {
        var t = value.split(':');
        return parseInt(t[0])*60+parseInt(t[1]);
    });
    temp.sort(function (a,b) {
        return a-b;
    });
    for(var i =0;i<temp.length;i++){
        var diff;
        var f=i-1,b=i;
        if(i==0)
            f=temp.length-1;
        if((temp[f]-temp[b])>(dayTime/2)){
            diff = Math.abs(temp[f]-(temp[b]+dayTime));
            minTime = diff<minTime?diff:minTime;
        }else {
            diff = Math.abs(temp[f]-temp[b]);
            minTime = diff<minTime?diff:minTime;
        }
    }
    return minTime===1440?0:minTime;
};

console.log(findMinDifference(["00:00","23:59","00:00"]));
