function doubleChar(str) {
    let doubleString = '';
    for (let i = 0; i < str.length; i++) {
      doubleString += str[i] + str[i];
    }
    return doubleString;
}



  function doubleChar(str) {
    let init = "";
    for (let i = 0 ; i<str.length; i++){
      init += str[i] +  str[i];
    }
    return init
  }



  console.log(doubleChar("sawan"));
