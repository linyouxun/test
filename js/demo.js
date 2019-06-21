/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
    var c = new Array(8);
    var c2 = new Array(8);
    var c3 = new Array(8);
    cells[0] = cells[7] = c[0] = c[7] = c2[0] = c2[7] = 0;
    for(var i = 1; i < 7; i++) {
        c2[i] = 1 - (cells[i - 1] ^ cells[i + 1]);
        c[i] = c2[i];
    }
    var count = 1;
    while(true) {
        for(var i = 1; i < 7; i++) {
            c3[i] = 1 - (c2[i - 1] ^ c2[i + 1]);
        }
        for(var i = 1; i < 7; i++) {
            c2[i] = c3[i];
        }
        var isSame = true;
        for(var i = 1; i < 7; i++) {
            if (c[i] != c2[i]) {
                isSame = false;
                break;
            }
        }
        if (isSame) {
            break;
        }
        count++;
    }
    N = (N - 1) % count;
    while(N--) {
        for(var i = 1; i < 7; i++) {
            c3[i] = 1 - (c[i - 1] ^ c[i + 1]);
        }
        for(var i = 1; i < 7; i++) {
            c[i] = c3[i];
        }
    }
    return c
};
var cells = [0,1,0,1,1,0,0,1];
var N = 7;
prisonAfterNDays(cells, N)