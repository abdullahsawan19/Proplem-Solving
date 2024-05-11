function countSheeps(sheep) {
    let counter = 0;
    sheep.map((m) => {
        if( m === true) counter ++;
    })
    return counter;
}
console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]))