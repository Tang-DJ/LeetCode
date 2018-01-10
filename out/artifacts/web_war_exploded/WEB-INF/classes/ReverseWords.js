
reverseWords('The quick brown fox jumps over the lazy dog.');
function reverseWords(str) {
    var re = "";
    var temp = str.split(" ");
    for(var i=0;i<temp.length;i++){
        re = re + temp[i].split("").reverse().join("");
    }
    return re;
}