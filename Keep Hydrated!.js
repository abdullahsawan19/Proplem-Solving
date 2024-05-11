function litres(time) {
    return Math.floor(time*0.5);
}
console.log(litres(3));


litres = t => ~~(t / 2);



function litres(time) {
    return time>>1
}