// 11. Container With Most Water
// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
//
//     Note: You may not slant the container and n is at least 2.
//
//
//
//
//
// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
//
//
//
// Example:
//
//     Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

/**
 * @param {number[]} height
 * @return {number}
 * O(n)
 */
let maxArea = function(height) {
    if(height.length<2)
        return 0;
    let start = 0, end=height.length-1;
    let MaxWater = 0;
    while(start<end){
        MaxWater = Math.max(MaxWater,Math.min(height[start],height[end])*(end-start));
        if(height[end]>height[start])
            start++;
        else end--;
    }
    return MaxWater;
};

// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// let maxArea = function(height) {
//     if(height.length<2)
//         return 0;
//     let start=0;
//     let MaxWater = 0;
//     while (start<height.length-1){
//         for(let i = start+1;i<height.length;i++){
//             let water = Math.min(height[start],height[i])*(i-start);
//             if(water>MaxWater){
//                 MaxWater = water;
//             }
//         }
//         start++;
//     }
//     return MaxWater;
// };

let result = maxArea( [1,8,6,2,5,4,8,3,7]);
console.log(result);