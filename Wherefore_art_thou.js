
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  arr = collection.filter(function(object){
    var wFa = true;
    for (var obj in source){
      if (!(obj in object) || source[obj] != object[obj]){
        wFa = false;
        break;
      }
      
    }
    return wFa;
  });
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
