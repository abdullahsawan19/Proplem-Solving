function countPositivesSumNegatives(input) {
    let newArray = [];
    let sumNegatives = 0 ;
    for (let i = 0 ; i < input.length ; i ++){
        if (input[i] > 0 ) {newArray.push(input[i])
        } else {
            sumNegatives += input[i];
        }
        }
    return [newArray.length , sumNegatives];
}


function countPositivesSumNegatives(input) {
    let positiveArray = input.filter((x) => x > 0).length;
    let negativeArray = input.filter((x) => x < 0)
    .reduce((acc,current) => acc + current, 0);
    return [positiveArray,negativeArray];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));