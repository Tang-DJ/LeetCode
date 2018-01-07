/*
Build Tower

Build Tower by the following given argument:
    number of floors (integer and always greater than 0).

Tower block is represented as *
Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Have fun!

for example, a tower of 3 floors looks like below
    [
    '  *  ',
        ' *** ',
        '*****'
    ]
and a tower of 6 floors looks like below

    [
    '     *     ',
        '    ***    ',
        '   *****   ',
        '  *******  ',
        ' ********* ',
        '***********'
    ]
Go challenge Build Tower Advanced once you have finished this :)*/
//编写的时候需要使用array，并未使用过所以手生。曾用过concat和join方法均不行，其中concat方法造成undefind
//对于计算有点不熟悉，这个方法想了很久

function towerBuilder(nFloors) {
    var result = new Array(nFloors);
    for(var i = 1;i<=nFloors;i++){
        var temp ="";
        var temp1 ="";
        for(var k = 0;k<nFloors-i;k++){
            temp+=" ";
        }
        for(var l = 0;l<2*i-1;l++){
            temp1+="*";
        }
        result[i-1]=(temp+temp1+temp);
    }
    return result;
}