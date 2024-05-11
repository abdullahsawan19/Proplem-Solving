function grow(x){
    return x.reduce((acc,current) => acc * current);
}


const grow=x=>eval(x.join("*"))

console.log(grow([1, 2, 3, 4]));