var countBinarySubstrings = function(s) {
    let ptr = 0, n = s.length, last = 0, ans = 0;
    while (ptr < n) {
        const c = s.charAt(ptr);
        console.log(c)
        let count = 0;
        while (ptr < n && s.charAt(ptr) === c) {
            ++ptr;
            ++count;
        }
        ans += Math.min(count, last);
        last = count;
    }
    return ans;
};

console.log(countBinarySubstrings('00110011'))