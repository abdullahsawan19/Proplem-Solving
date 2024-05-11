function remove (string) {
if( string.endsWith("!")){
    return string.slice(0,-1);
}else {
    return string;
}
}
console.log(remove("!Hi"));
