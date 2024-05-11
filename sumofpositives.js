function positiveSum(arr) {
    let init = 0;
    for( let i =0 ;i<arr.length;i++){
    if(arr[i] > 0){
        init += arr[i]
    }
    }
    return init;
}

function positiveSum(arr) {
    return arr.reduce((acc,current)=> acc + (current > 0 ? current : 0),0);
}
console.log(positiveSum([7,9,-1,0]))


function sum( ...nums ){
    let inithial = 0;
    for( let i = 0 ; i <  nums.length ; i++){
        inithial += nums[i];
    }
    return inithial ;
}

console.log(sum(2,3,4,5));




let numbers =[9,8,4,3,23];
let addself = numbers.map(function(num){
    return num+num;
})
console.log(addself);





function addithion (a){
    return a + a ; 
}
let add =  numbers.map(addithion);
console.log(add);

