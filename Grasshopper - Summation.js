var summation = function (num) {
    let sum = 0;
    for(let i = 1; i <= num ; i++){
        sum += i;
    }
    return sum;
}


function summation(num) {
    return num * (num + 1) / 2
}

console.log(summation(5)); 