function removeEveryOther(arr){
    let newArray =[];
    for (let i = 0 ; i < arr.length ; i++){
        newArray.push(arr[i]);
        i++;
    }
    return newArray;
}


function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
    return index % 2 === 0;
    });
}


function removeEveryOther(arr){
    for (var i = 1; i < arr.length;i++){
        arr.splice(i,1);
    }
    return arr;
}


console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));