function squareOrSquareRoot(array) {
    let newArray = [];
    for  (let i = 0; i < array.length ; i++) {
        if (Number.isInteger(Math.sqrt(array[i]))){
            newArray.push(Math.sqrt(array[i]));
        } else {
            newArray.push(array[i] * array[i]);
        }
}
return newArray;
}


function squareOrSquareRoot(array) {
    return array.map(x => {
        const r = Math.sqrt(x);
        return (r % 1 == 0) ? r : (x*x);
    });  
}  
console.log(squareOrSquareRoot([4,3,9,7,2,1]));
