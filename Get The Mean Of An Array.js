function getAverage(marks){
    let a = marks.length;
    let add = marks.reduce(function (acc , curr){
        return acc + curr;
    })
    return Math.floor(add/a);   
}



function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

console.log(getAverage([1,5,87,45,8,8]));
