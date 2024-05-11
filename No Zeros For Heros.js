function noBoringZeros(n) {
    let stringpram = String(n);
        while(stringpram.endsWith(0)){
            stringpram = stringpram.slice(0,stringpram.length-1)
        
    }
    return Number(stringpram)
}



function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) {
        n = n / 10;
    }
    return n
}




function noBoringZeros(n) {
    return n % 10 || n === 0 ? n : noBoringZeros(n / 10);
}  



console.log(noBoringZeros("105000000"));