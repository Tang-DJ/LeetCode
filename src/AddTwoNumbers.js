// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
//     You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
//     Example:
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//第一次的思路为转换成数字然后进行相加 然后再重新转回来
//遇见例子：
// 输入：
// [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// [5,6,4]
// 输出：
// [0,3,NaN,NaN,1]
// 预期：
// [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// 造成失败，发现对题目的思考出现偏差
//
// var addTwoNumbers = function(l1, l2) {
//     var a = ala(l1);
//     var b = ala(l2);
//     var re = (parseInt(a)+parseInt(b)).toString().split("");
//     re = re.reverse();
//     for(var i =0;i<re.length;i++){
//         re[i]=parseInt(re[i]);
//     }
//     return re;
//
// };
//
// function ala(l) {
//     var re = "";
//     var temp = l;
//     while(temp){
//         re+= temp.val;
//         temp = temp.next;
//     }
//     re = re.split("").reverse();
//     var dx='';
//     for(var i =0;i<re.length;i++){
//         dx+=re[i];
//     }
//     return dx;
// }

