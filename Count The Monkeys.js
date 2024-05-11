function monkeyCount(n) {

    let newArray = [];
    for (let i = 1 ; i <= n ; i++){
            newArray.push(i);
    }
    return newArray;
}

function monkeyCount(n) {
    for (var i = 0, arr = []; i < n; arr.push(++i));
    
    return arr;
}




console.log(monkeyCount(6));