
var num;
function multiple (num){
  if(num%2==0){
    return true;
  }else if (num%5==0) {
      return true;
  } else if(num%2==0 && num%5==0){
    return true;
  } else{
    return false;
  }
}
