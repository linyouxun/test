console.log('async');
function run(time) {
    time = time || 1000;
    var start = performance.now()
    while(performance.now() - start < time);
    console.log('done async');
}
run(1)