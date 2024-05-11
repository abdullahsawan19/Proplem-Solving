function invert(array) {
    let newArray =[]
    let em =[];
        for (let i = 0 ; i < array.length ;i++){
        if(typeof array[i] === "number"){
            newArray.push(array[i]*-1);
        }else{
            return em;
        }
        }
    return newArray;
}

console.log(invert([1,-2,3,-4,5]))