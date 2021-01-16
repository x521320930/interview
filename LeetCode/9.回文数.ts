
function isPalindrome(x: number): boolean {
    if (x < 0) return false
    let revertedNumber: number = 0
    let num: number = x
    while (num != 0) {
        revertedNumber = revertedNumber * 10 + num % 10
        num = (num / 10) | 0
    }
    return x === revertedNumber
};