/*
Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Any spaces in the string should be retained.

    Example:

reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
reverseWords("double  spaces"); // returns  "elbuod  secaps"
*/

/*使用replace的时候出现了长时间不能替换的情况
* 经过检查，第一个BUG是没有用字符串接replace之后的字符串，以为如同java一样改了就行，事实上并不是这样
* 第二个BUG是replace的第一个空为正则表达式，不能填写变量，所以当时变量的时候会出错。
* 经过网上的学习发现了new一个正则表达式的方法，才得以解决
*
* ！！！map方法完美解决
* map()方法返回一个新数组，数组中的元素为原始数组元素调用函数处理的后值。
map()方法按照原始数组元素顺序依次处理元素。
*
* */

function reverseWords(str) {
    var temp = str.split(" ");
    for(var i=0;i<temp.length;i++){
        str=str.replace(new RegExp(temp[i],'g'),temp[i].split("").reverse().join(""));
    }
    return str;
}

