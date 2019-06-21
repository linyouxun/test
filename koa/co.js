var fs = require('fs');
var path = require('path');

function size(filename) {
    return function(cb) {
        fs.stat(path.resolve(__dirname, filename), function(err, data) {
            cb(err, data.size)
        })
    }
}

// var fileSize = size('text.txt');
// fileSize(function(err, size) {
//     console.log(size);
// });
function isObject(obj) {
    return obj && Object == obj.constructor;
}
function isArray(obj) {
    return Array.isArray(obj);
}

function toThunk(ctx, obj) {
    if(isArray(obj) || isObject(obj)) {
        return ;
    } else {
        return obj;
    }
}

function co(fn) {
    return function(done) {
        var ctx = this;
        var gen = fn.call(ctx);
        var it = null;
        function _next(err, data) {
            it = gen.next(data);
            if(it.done) {
                done.call(ctx, err, it.value);
            } else {
                it.value = toThunk(it.value, ctx);
                it.value(_next);
            }
        }
        _next();
    }
}

co(function *(){
    var a = yield size('text.txt');
    var b = yield size('text2.txt');
    console.log(a);
    console.log(b);
    return [a,b];
})(function (err,args){
    console.log("callback===args=======");
    console.log(args);
})