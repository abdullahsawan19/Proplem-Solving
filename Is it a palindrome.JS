function isPalindrome(x) {
    if(x.split('').reverse().join('').toLowerCase() == x.toLowerCase()){
        return true;
    }else{
        return false;
    }
}


const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();
console.log(isPalindrome("Abba"))