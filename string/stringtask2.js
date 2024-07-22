var fname = "amiT";
var upperName = "";
for (let i = 0; i < fname.length; i++) {
  //console.log(fname[i]);
  //   console.log("before",fname.charCodeAt(i)); //97
  // console.log("after-32",fname.charCodeAt(i)-32); //65
  //console.log("after-32 new char",String.fromCharCode(fname.charCodeAt(i)-32)); //A
  if (fname.charCodeAt(i) >= 97 && fname.charCodeAt(i) <= 122) {
    upperName = upperName + String.fromCharCode(fname.charCodeAt(i) - 32);
  } else {
    upperName = upperName + fname[i];
  }
}
console.log(upperName); //AMIT


var xname = "KUNAL"
var lowerName = "";
for(let i=0;i<xname.length;i++){


    if(xname.charCodeAt(i)>=65 && xname.charCodeAt(i)<=90){
        lowerName = lowerName + String.fromCharCode(xname.charCodeAt(i)+32);
    }
    else{
        lowerName = lowerName + xname[i];
    }



}
console.log(lowerName); //amit