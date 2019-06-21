function* run() {
    return 'run'
}
var r = run();
function *start() {
    var a = yield 'start1';
    console.log(a);
    var c = yield *r;
    console.log(c);
    var b = yield 'start2';
    console.log(b);
    return 'start3'
}
var it = start();
var ret = '';
var i = 0;
ret = it.next(i++)
// while((ret = it.next(i++), !ret.done)) {
    console.log('log', ret)
// }

ret = it.next(i++)
console.log('log', ret)
console.log(ret)