function sumArray(array) {
    if (array == null) return 0 ;
    let biggstnum = Math.max(...array);
    let smallestnum = Math.min(...array);
    let newarray = array.filter( (x) => x  !== biggstnum &&  x !== smallestnum);
    let sum = newarray.reduce(function(acc , current){
        return acc + current ;
    })
    console.log(sum);
}




function sumArray1(array){
    if (array == null) return 0 ;
    return array.sort(( a , b  ) => a-b).slice(1,-1).reduce((acc , current) => acc + current,0);
}


function sumArray2(array){
    if (array == null) return 0 ;
    return array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array);
}
console.log(sumArray1([1,3,5,1,1,1,6,1,10]));


