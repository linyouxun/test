self.onmessage = function() {
    var start = performance.now();
    while (performance.now() - start < 1000);
    console.log('done')
}