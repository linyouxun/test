var fs = require('fs');
var path = require('path');

var size = function(filename) {
    return function(done) {
        fs.stat(path.resolve(__dirname, filename), function(err, data) {
            done(err, data.size);
        })
    }
}

var fileSize = size('text.txt');
fileSize(function(err, data) {
    console.log(err, data)
})

function co(fn) {
    return function(done) {
        var that = this;
        var gen = fn.call(that);
        var it = null;
        function _next(err, res) {
            it = gen.next(res);
            if (it.done) {
                done.call(that, err, it.value)
            } else {
                it.value(_next);
            }
        }
        _next();
    }
}

// function co(fn) {
//     return function(done) {
//         var ctx = this;
//         var gen = fn();
//         var it = null;
//         function _next(err, data) {
//             it = gen.next(data);
//             if (it.done) {
//                 done.call(ctx, err, it.value)
//             } else {
//                 it.value(_next);
//             }
//         }
//         _next();
//     }
// }


co(function* () {
    var a = yield size('text.txt');
    var b = yield size('text2.txt');
    return [a, b];
})(function(err, data) {
    console.log(err, data);
})

