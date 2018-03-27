/*
When we attended middle school were asked to simplify mathematical expressions like "3x-yx+2xy-x" (or usually bigger), and that was easy-peasy ("2x+xy"). But tell that to your pc and we'll see!

Write a function:

simplify(poly)
that takes a string in input, representing a multilinear non-constant polynomial in integers coefficients (like "3x-zx+2xy-x"), and returns another string as output where the same expression has been simplified in the following way ( -> means application of simplify):

All possible sums and subtraction of equivalent monomials ("xy==yx") has been done, e.g.:
"cb+cba" -> "bc+abc", "2xy-yx" -> "xy", "-a+5ab+3a-c-2a" -> "-c+5ab"

All monomials appears in order of increasing number of variables, e.g.:
"-abc+3a+2ac" -> "3a+2ac-abc", "xyz-xz" -> "-xz+xyz"

If two monomials have the same number of variables, they appears in lexicographic order, e.g.:
"a+ca-ab" -> "a-ab+ac", "xzy+zby" ->"byz+xyz"

There is no leading + sign if the first coefficient is positive, e.g.:
"-y+x" -> "x-y", but no restrictions for -: "y-x" ->"-x+y"

N.B. to keep it simplest, the string in input is restricted to represent only multilinear non-constant polynomials, so you won't find something like `-3+yx^2'. Multilinear means in this context: of degree 1 on each variable.

    Warning: the string in input can contain arbitrary variables represented by lowercase characters in the english alphabet.

    Good Work :)*/

function simplify(poly){

    function compareLen(str1, str2) {
        if (str1[0].length < str2[0].length) {
            return -1;
        } else if (str1[0].length === str2[0].length ) {
            return 0;
        } else {
            return 1;
        }
    }

    var temp = new Array();
    var index=0;
    for(var i = 1;i<poly.length;i++){
        if(poly[i]==="+"||poly[i]==="-"){
            temp.push(poly.slice(index,i));
            index= i;
        }
    }
    temp.push(poly.slice(index,poly.length));

    var re = new Array();
    var reg ="[a-z]+$";
    for(var k=0;k<temp.length;k++){
        var str = temp[k].match(reg).toString();
        var num = temp[k].replace(str,"");
        var val = new Array();
        if(num==="")
            num=1;
        else if(num==="-"||num==="+"){
            num= num+"1";
        }
        val =val.concat(str.split("")).sort();
        re[k]=[val.join(""),parseInt(num)];
    }
    re =re.sort();
    re =re.sort(compareLen);
    var hash = {};
    for(var l=0;l<re.length;l++){
        if(!hash[re[l][0]])
            hash[re[l][0]]= re[l][1];
        else hash[re[l][0]] +=re[l][1];
    }
    var result="";

    for(var key in hash){
        if(hash[key]===0)
            continue;
        if(hash[key]>0)
            hash[key]="+"+hash[key];
        if(hash[key]==="+1")
            hash[key]="+";
        if(hash[key]===-1)
            hash[key]="-";
        result+=(hash[key]+key);
    }
    if(result[0]==="+")
        result = result.slice(1,result.length);
    return result;
}