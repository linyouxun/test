var a = 1234567;
function setA(num) {
    var s = num + '';
    var len = s.length;
    var s2 = '';
    for(var i = 0, j = 1; i < len; i++, j++) {
        s2 += s[len - j];
        if (j % 3 === 0) {
            s2 += ','
        }
    }
    var len = s2.length;
    for(var i = 0; i < len / 2; i++) {
        console.log(s2[i], s2[len - i - 1]);
        var temp = s2[i];
        s2[i] = s2[len - i - 1];
        s2[len - i - 1] = temp;
    }
    return s2;
}
var a2 = setA(a);
console.log(a2)