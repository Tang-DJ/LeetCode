/*
A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.

    For example, take 153 (3 digits):

1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1634 (4 digits):

1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
The Challenge:

    Your code must return true or false depending upon whether the given number is a Narcissistic number.

    Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.*/

//水仙花数，注意乘法的基数是1，var都要初始化
function narcissistic( value ) {
    var sum=0;
    for(var i = 0;i<value.toString().length;i++){
        var temp =1;
        for(var l =0 ;l<value.toString().length;l++){
            temp*= value.toString().charAt(i);
        }
        sum+=temp;
    }
    if(sum==value)
        return true;
    else return false;
}
