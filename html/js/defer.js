console.log('defer')
function run(time) {
    time = time || 1000;
    var start = performance.now()
    while(performance.now() - start < time);
    console.log('done defer');
}
run(1)