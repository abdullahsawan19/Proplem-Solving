function position(letter){
        let alp ="abcdefghijklmnopqrstuvwxyz";
    for ( let i = 0 ;  i <= alp.length ; i++ ){
            if (alp[i] === letter){
                return `"Position of alphabet: ${i+1}"`
            }
        }
}


console.log(position("g"));