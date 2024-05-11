function squareSum(numbers){
    let newArray = [];
    let inithial = 0;
    for(let i =0 ; i < numbers.length ; i++) {
        newArray.push(numbers[i]**2);
    }
    for(let n =0 ; n < newArray.length ; n++) {
        inithial += newArray[n];
    }
    return inithial ;
}
       


function squareSum(numbers){
    return numbers.reduce(function(sum, n){
        return (n*n) + sum;
    }, 0)
}

console.log(squareSum([3,4,5]));










