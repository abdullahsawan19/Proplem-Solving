function makeNegative(num) {
    if (num < 0){
        return num; 
    } else if (num === 0){
        return 0 ;
    }else {
        return -num;
    }
}



function makeNegative(num) {
    return num < 0 ? num : -num;
}



function makeNegative(num) {
    return -Math.abs(num);
}


console.log(makeNegative(10));



