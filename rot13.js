function rot13(str) {
  str = str.toLowerCase();
  var alp = "abcdefghijklmnopqrstuvwxyz";  
  var answer = '';
  for(var i = 0; i < str.length; i++){
    if(alp.indexOf(str[i]) > 12){
      answer += alp[12 - (25 - alp.indexOf(str[i]))];
    }
    else if(alp.indexOf(str[i]) > -1){
      answer += alp[alp.indexOf(str[i])+13];  
    }
    else {
      answer += str[i];
    }
  }
  answer = answer.toUpperCase();
  return console.log(answer);
}
