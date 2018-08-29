/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0..255 (included).

    Input to the function is guaranteed to be a single string.

    Examples

// valid inputs:
1.2.3.4
123.45.67.89

// invalid inputs:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089*/

//判断的时候第一次没有考虑首位为0 的情况。第二次的时候一直不通过 查看了测试数据之后发现是因为有英文输入 但代码中并没有判断。
function isValidIP(str) {
    var reg = /^[0-9]+.?[0-9]*$/;
    var temp = str.split(".");
    if(temp.length!=4)
        return false;
    for(var i=0;i<4;i++){
        if(!reg.test(temp[i])||temp[i]<0||temp[i]>255||Math.abs(temp[i]).toString().length!=temp[i].length)
            return false;
    }
    return true;
}