function formatMoney(amount){
    return `$`+amount.toFixed(2);
}

let formatMoney = amount => `$`+amount.toFixed(2);


console.log(formatMoney(3.1));