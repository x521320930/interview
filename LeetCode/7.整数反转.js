/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0
    while (x != 0) {
        res = res * 10 + x % 10
        console.log(res)
        x = (x / 10) | 0
    }
    return (res | 0) === res ? res : 0
};
