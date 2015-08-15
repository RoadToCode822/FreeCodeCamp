//Bonfire 5: Check for Palindromes
function palindrome(str) {
  var oldString = str.toLowerCase().replace(/\W/g, '');
  var newString = oldString.split('').reverse().join('');
  if (oldString == newString){
    return true;
  }
  else {
    return false;
  }
}



palindrome("eye");
