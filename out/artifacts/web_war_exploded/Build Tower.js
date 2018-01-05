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
function towerBuilder(nFloors) {
    var result = new Array(nFloors);
    var temp;
    var temp1;
    for(var i = 0;i<nFloors;i++){
        for(var k = 0;k<nFloors-i;k++){
            temp.concat(" ");
        }
        for(var l = 0;l<2*i-1;l++){
            temp1.concat("*");
        }
        result.concat(temp,temp1,temp);
    }
    return result;
}