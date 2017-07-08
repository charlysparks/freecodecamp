
function palindrome(str) {
  // Good luck!
  var newStr = str.replace(/[^0-9a-zA-Z#*]/g,"").toLowerCase();
  var reversedStr = newStr.split("").reverse().join("");

  console.log(newStr);
  console.log(reversedStr);

  if (newStr != reversedStr)
    return false;

  return true;
}



palindrome("eye");
