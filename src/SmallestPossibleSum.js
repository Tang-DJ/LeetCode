/*
Description

Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:

if X[i] > X[j] then X[i] = X[i] - X[j]

When no more transformations are possible, return its sum ("smallest possible sum").

    For instance, the successive transformation of the elements of input X = [6, 9, 21] is detailed below:

    X_1 = [6, 9, 12] # -> X_1[2] = X[2] - X[1] = 21 - 9
X_2 = [6, 9, 6]  # -> X_2[2] = X_1[2] - X_1[0] = 12 - 6
X_3 = [6, 3, 6]  # -> X_3[1] = X_2[1] - X_2[0] = 9 - 6
X_4 = [6, 3, 3]  # -> X_4[2] = X_3[2] - X_3[1] = 6 - 3
X_5 = [3, 3, 3]  # -> X_5[1] = X_4[0] - X_4[1] = 6 - 3
The returning output is the sum of the final transformation (here 9).

Example

solution([6, 9, 21]) #-> 9
Solution steps:

    [6, 9, 12] #-> X[2] = 21 - 9
    [6, 9, 6] #-> X[2] = 12 - 6
    [6, 3, 6] #-> X[1] = 9 - 6
    [6, 3, 3] #-> X[2] = 6 - 3
    [3, 3, 3] #-> X[1] = 6 - 3
Additional notes:

    There are performance tests consisted of very big numbers and arrays of size at least 30000. Please write an efficient algorithm to prevent timeout.*/


//初始的时候思考用两个最接近的数的差值，最后发现一部分数不可行

//然后使用递归减法，耗时过长。使用减法的耗时都过于长，当 换成取余就大大的优化了。
function solution(numbers){
    var total = numbers.length;
    var index = 1;
    while(index!==numbers.length){
        while(numbers[index-1]!==numbers[index]){

            if(numbers[index-1]>numbers[index]){
                if(numbers[index-1]%numbers[index]!==0)
                    numbers[index-1]=numbers[index-1]%numbers[index];
                else
                    numbers[index-1]=numbers[index];
            }
            else {
                if(numbers[index]%numbers[index-1]!==0)
                    numbers[index]=numbers[index]%numbers[index-1];
                else
                    numbers[index]=numbers[index-1];
            }
        }
        numbers.splice(index-1, 1);
    }

    return numbers[0]*total;
}
