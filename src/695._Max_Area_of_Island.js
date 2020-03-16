// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let max = 0;
  let num = 0;
  for(let i = 0;i<grid.length;i++) {
    for(let l=0;l<grid[0].length;l++) {
      // console.log(`i:${i} l:${l}`)
      if(grid[i][l] === 1) {
        num = deepfind(grid,i,l)
        console.log('num', num)
        max = num>=max? num : max
      }
    }
  }
  return max;
};

var deepfind = function(grid, i, l){
  if(i === grid.length || i< 0) {
    return 0
  }else if(l === grid[0].length || l<0) {
    return 0;
  }
  if(grid[i][l] === 1) {
    grid[i][l] = 0;
    return 1 + deepfind(grid,i-1,l) + deepfind(grid,i,l-1) + deepfind(grid,i+1,l) + deepfind(grid,i,l+1);
  }
  return 0;
}

let result = maxAreaOfIsland(
  [[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
)

console.log(result)