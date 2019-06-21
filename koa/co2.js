var fs = require('fs');
var path = require('path');
function size(filename) {
    return function(done) {
        fs.stat(path.resolve(__dirname, filename), function(err, data){
            done(err, data.size)
        })
    }
}

// var fileSize = size('text.txt');
// fileSize(function(err, size) {
//     console.log(err, size);
// })

function co(fn) {
    return function(done) {
        var ctx = this;
        var gen = fn();
        var it = null;
        function _next(err, data) {
            it = gen.next(data);
            if (it.done) {
                done.call(ctx, err, it.value)
            } else {
                it.value(_next);
            }
        }
        _next();
    }
}

co(function *() {
    var a = yield size('text.txt');
    console.log('log', a)
    var b = yield size('text2.txt');
    console.log('log', b)
    return [a, b]
})(function(err, data) {
    console.log(err, data)
})

ret = it.next(i++)


