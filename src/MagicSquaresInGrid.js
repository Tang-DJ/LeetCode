// A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum.
//
//     Given an grid of integers, how many 3 x 3 "magic square" subgrids are there?  (Each subgrid is contiguous).
//
//
//
// Example 1:
//
// Input: [[4,3,8,4],
//     [9,5,1,9],
//     [2,7,6,2]]
// Output: 1
// Explanation:
//     The following subgrid is a 3 x 3 magic square:
//     438
// 951
// 276
//
// while this one is not:
//     384
// 519
// 762
//
// In total, there is only one magic square inside the given grid.
// Note:
//
//  1 <= grid.length <= 10
//  1 <= grid[0].length <= 10
//  0 <= grid[i][j] <= 15
//
// [[4,3,8,4],[9,5,1,9],[2,7,6,2]]:undefine 原因格式问题
// [[8]]：答案为0
//[[4,1,2],[7,9,3],[8,6,5]] 没有对没有的数进行判断
// [[10,3,5],[1,6,11],[7,9,2]] 需要小于15，，，
//[[7,0,5],[2,4,6],[3,8,1]];  答案0//九宫格不能有0
//[[3,2,9,2,7],[6,1,8,4,2],[7,5,3,2,7],[2,9,4,9,6],[4,3,8,2,5]]
//[[5,6,4,4,9,5,2],[8,3,9,9,8,1,3],[6,2,5,7,4,7,6],[8,6,5,3,5,1,6],[2,4,3,3,6,3,8],[3,8,2,6,2,5,1],[5,2,9,7,9,7,4]] 逻辑判断不全 答案0
// [[4,3,8,4],[9,5,1,9],[2,7,6,2]] 答案1
//这道题的思路十分简单，就是有很多的坑
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    var sum=0;
    for(var row = 0;row<grid.length-2;row++){
        for(var col = 0;col<grid.length-2;col++){
            if(isSame([grid[row][col],grid[row][col+1],grid[row][col+2],
                    grid[row+1][col],grid[row+1][col+1],grid[row+1][col+2],
                    grid[row+2][col],grid[row+2][col+1],grid[row+2][col+2]]))
                sum++;

        }
    }
    return sum;
};

function isSame(grid) {
    var re =true;
    grid.forEach(function (value) {
        if(value<1||value>9){
            re = false;
        }
    });
    if(!re){
        return false;
    }
    var row1 = grid[0]+ grid[1]+ grid[2];
    var row2 = grid[3]+ grid[4]+ grid[5];
    var row3 = grid[6]+ grid[7]+ grid[8];
    if(row1!==row2||row2!==row3||row3!==row1){
        return false;
    }
    var col1 = grid[0]+ grid[3]+ grid[6];
    var col2 = grid[1]+ grid[4]+ grid[7];
    var col3 = grid[2]+ grid[5]+ grid[8];
    if(col1!==col2||col2!==col3||col3!==col1){
        return false;
    }
    var lr = grid[0]+ grid[4]+ grid[8];
    var rl = grid[2]+ grid[4]+ grid[6];
    if(lr!==rl){
        return false;
    }
    if(row1===col1&&col1===lr&&col1<=15)
        return true;
    else return false;
}

var grid = [[5,6,4,4,9,5,2],[8,3,9,9,8,1,3],[6,2,5,7,4,7,6],[8,6,5,3,5,1,6],[2,4,3,3,6,3,8],[3,8,2,6,2,5,1],[5,2,9,7,9,7,4]]
console.log(numMagicSquaresInside(grid));