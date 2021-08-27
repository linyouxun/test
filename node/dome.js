console.log('1 1');
    
    setTimeout(function() {
        console.log('2 5');
        process.nextTick(function() {
            console.log('3 7');
        })
        new Promise(function(resolve) {
            console.log('4 6');
            resolve();
        }).then(function() {
            console.log('5 8')
        })
    })
    process.nextTick(function() {
        console.log('6 3');
    })
    new Promise(function(resolve) {
        console.log('7 2');
        resolve();
    }).then(function() {
        console.log('8 4')
    })
    
    setTimeout(function() {
        console.log('9 9');
        process.nextTick(function() {
            console.log('10 10');
        })
        new Promise(function(resolve) {
            console.log('11 11');
            resolve();
        }).then(function() {
            console.log('12 12')
        })
    })

        
    setTimeout(function() {
        console.log('13 13');
        process.nextTick(function() {
            console.log('14 14');
        })
        new Promise(function(resolve) {
            console.log('15 15');
            resolve();
        }).then(function() {
            console.log('16 16')
        })
    })