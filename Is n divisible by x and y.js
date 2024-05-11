function isDivisible(n, x, y) {
    if( (n%x  === 0) && (n%y  === 0)){
        return true;
    }else{
        return false;
    }
}


function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false;
}

function isDivisible(n, x, y) {
    return !(n%x||n%y)
}



function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
}

console.log(isDivisible(12,2,6));
// console.log(isDivisible(12,7,5));