function name(n) {
    return n
}
co(function* test() {
    var n = 'n';
    var i = 0;
    var a = [];
    for (var i = 0; i < 3; i++) {
        var data = yield name(n + i)
        a.push(data);
    }
    return a;
})(function(data) {
    console.log(data);
})

function co(fn) {
    var that = this;
    var gen = fn.call(that);
    var it = null;
    return function(done) {
        function _next(data) {
            it = gen.next(data);
            if (it.done) {
                done.call(that, it.value);
            } else {
                // it.value.call(that, );
                _next.call(that, it.value);
            }
        }
        _next();
    }
}
