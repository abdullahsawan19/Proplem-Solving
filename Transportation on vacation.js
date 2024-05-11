function rentalCarCost(d) {
    let price = 40;
    if (d >= 7) {
      return price * d - 50;
    } else if (d >= 3) {
      return price * d - 20;
    } else {
      return price * d;
    }   
}



const rentalCarCost = d =>
  d * 40 - ((d > 6) * 50 || (d > 2) * 20);

console.log(rentalCarCost(4));


