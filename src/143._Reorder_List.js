// 143._Reorder_List
// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
//     reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
//
// You may not modify the values in the list's nodes, only nodes itself may be changed.
//
// Example 1:
//
// Given 1->2->3->4, reorder it to 1->4->2->3.
// Example 2:
//
// Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
//
// Input: []
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

function ListNode(val) {
     this.val = val;
     this.next = null;
}
var reorderList = function(head) {
    if(head==null||head.next==null||head.next.next==null)
        return;
    var temp = head;
    var con =[],nCon=[];
    while(temp.next!=null){
        con.push(temp.val);
        temp = temp.next;
    }
    con.push(temp.val);
    nCon.push(con[0]);
    for(var i=1;i<con.length;i++){
        if(i%2===1)
            nCon.push(con[con.length-1-Math.floor(i/2)]);
        else
            nCon.push(con[Math.floor(i/2)]);
    }
    temp = head.next;
    for(var l =1;l<nCon.length;l++){
        temp.val = nCon[l];
        temp = temp.next;
    }
};

function newList(arr){
    var result,head;
    head = new ListNode(arr[0]);
    result = head;
    for(var i=1;i<arr.length;i++){
        result.next =new ListNode(arr[i]);
        result = result.next;
    }
    reorderList(head);
}

newList([1,2,3])

// 调换第二位和最后一位的代码，理解题意错误
//var reorderList = function(head) {
//     if(head==null||head.next==null)
//         return;
//     var newNode = new ListNode(0);
//     var temp = head.next;
//     if(temp.next==null)
//         return;
//     head.next = newNode;
//     newNode.next = temp;
//     while(temp.next.next!=null){
//         temp = temp.next;
//     }
//     newNode.val = temp.next.val;
//     temp.next = null;
// };