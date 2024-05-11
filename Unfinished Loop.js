function createArray(number){
    var newArray = [];
    
    for(var i = 1; i <= number; i++){
        newArray.push(i);
    }
    
        return newArray;
}
console.log(createArray(5));