
function findLongestWord(str) {
  var longest = 0;

  var arr = str.split(" ");

  for(var i in arr){
    if(arr[i].length > longest)
      longest = arr[i].length;
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
