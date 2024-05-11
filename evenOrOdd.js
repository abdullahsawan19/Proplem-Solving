function evenOrOdd(number) {
if(number % 2 === 0){
    console.log("even");
}else{
    console.log("odd");
}
}
evenOrOdd();



function evenOrOdd(number) {
return number % 2 === 0 ?  "even" :  "odd";
}
console.log(evenOrOdd(10));



function evenOrOdd(number) {
if(number % 2 === 0){
    return"even";
}else{
    return"odd";
}
}
console.log(evenOrOdd());