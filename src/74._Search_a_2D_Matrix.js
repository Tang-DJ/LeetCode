// 74._Search_a_2D_Matrix
// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
//
//     Integers in each row are sorted from left to right.
//     The first integer of each row is greater than the last integer of the previous row.
//     Example 1:
//
// Input:
//     matrix = [
//         [1,   3,  5,  7],
//         [10, 11, 16, 20],
//         [23, 30, 34, 50]
//     ]
// target = 3
// Output: true
// Example 2:
//
// Input:
//     matrix = [
//         [1,   3,  5,  7],
//         [10, 11, 16, 20],
//         [23, 30, 34, 50]
//     ]
// target = 13
// Output: false
//
// Input:
// [[1]]
// 1
// Expected: true
// [[1],[3]]
// 3
// Expected:
// true
//
// Input:
//     [[1,3,5,7],[10,11,16,20],[23,30,34,50]]
// 0
// Expected:
// false
//
// Input:[]
// Input: [[-8,-8,-6],[-3,-2,0]] 3 false
// 数组有indexOf函数

//可以将这个二维数组看做一个数组，以二分法查找为最优算法

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length===0)
        return false;
    var row=0,col=matrix[0].length-1;
    while(row<matrix.length&&col>=0){
        if(matrix[row][col]===target)
            return true;
        else if(matrix[row][col]>target)
            col--;
        else
            row++;
    }
    return false;
};


console.log(searchMatrix([[-8,-8,-6],[-3,-2,0]]
,-3));


//太过于复杂
// var searchMatrix = function(matrix, target) {
//     if(matrix.length===0||matrix[0][0]>target){
//         return false
//     }
//     if(matrix.length===1){
//         return matrix[0].indexOf(target)>-1?true:false;
//     }
//     for(var i=0;i<matrix.length-1;i++){
//         if(matrix[i][0]<=target&&matrix[i+1][0]>target){
//             return matrix[i].indexOf(target)>-1?true:false;
//         }else if(i+1===matrix.length-1){
//             return matrix[i+1].indexOf(target)>-1?true:false;
//         }
//     }
//     return false;
// };