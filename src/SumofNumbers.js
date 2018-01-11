/*
Beginner Series #3 Sum of Numbers
Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

    Note: a and b are not ordered!

    Examples

GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2*/



//可以利用min，max判断哪个大哪个小，然后进行等差数列求和
function GetSum( a,b )
{
    var sum=a;
    while(a!=b){
        sum+=b;
        if(a-b>0)
            b++;
        else
            b--;
    }
    return sum;
}// -1 + 0 + 1 + 2 = 2