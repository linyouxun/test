// function *gen(x) {
//     const a = yield x + 1;
//     const b = yield x + 2;
//     const c = yield x + 3;
//     console.log('a + b + c = ', a + b + c)
//     return a + b + c;
//     // return x + 4;
// }
// var value = 1;
// var ite = gen(value);
// var data = {
//     value: value,
//     done: false
// };
// while((data = ite.next(data.value), !data.done)) {
//     console.log('data', data)
// }
// console.log(data)


// function co(gen) {
//     return function(fn) {
//         var args = Array.prototype.slice.call(arguments);
//         var iter = gen(args);
//         var data = iter.next();
//         function _next(err, data) {
//             if (data.done) {
//                 fn(err, data.value)
//             } else {
//                 _next(err, iter.next(data.value))
//             }
//         }
//         _next(null, data);
//     }
// }

// co(function *gen() {
//     var x = 1;
//     const a = yield x + 1;
//     const b = yield x + 2;
//     const c = yield x + 3;
//     console.log('a + b + c = ', a + b + c)
//     return a + b + c;
//     // return x + 4;
// })(function(err, data) {
//     console.log(data)
// })

function* next_id() {
    return 1
}
var ite = next_id();
var data = {
    value: 0,
    done: false
};
while((data = ite.next(data.value), !data.done)) {
    console.log('data', data)
}
console.log(data)

