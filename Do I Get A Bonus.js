function bonusTime(salary, bonus) {
    if ( bonus == true){
        return  "£" + salary *10 ;
    }
    else{
        return  "£" + salary ;
    } 
}


function bonusTime(salary, bonus) {
    return bonus ? `£${10 * salary}` : `£${salary}`;
}


var bonusTime=(salary, bonus)=>'£'+salary*(bonus?10:1)


console.log(bonusTime(2500,true));