function digitize(n) {
    var str = String(n);
    return str.split('').map(Number).reverse()
}
console.log(digitize(12938));


function digitize(n) {
    return n.toString().split("").map((x) => Number(x)).reverse();
}
