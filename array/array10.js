//check string palindrome..
//how to reverse a string in js

var data = ["naman", "madam", "racecar1", "level"];
function reverseString(str) {
  //royal
  var revstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    //4//3//2//1//0
    revstr = revstr + str[i]; //a
    //revstr ="layor"
  }

//  console.log("reverse string...", revstr);
  if (str == revstr) {
    //return console.log("String is palindrome...");
    return true;
  } else {
    //console.log("String is not palindrome...");
    return false;
  }
}
//reverseString("naman")

var flag = data.every((d) => {
  return reverseString(d);
});

console.log("flag...", flag);
