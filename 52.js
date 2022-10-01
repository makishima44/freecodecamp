const s = [5, 7, 2];
function editInPlace() {
    if(s[0] === 5) {
        s[0] = 2
    }
    if(s[1] === 7) {
        s[1] = 5;
    }

    if(s[2] === 2) {
    s[2] = 7
    }
    return s
}

console.log(editInPlace())
