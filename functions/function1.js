// var no1 = 100
// var no2 = 200

// var sum = no1 + no2
// console.log(sum)

function drawLine() {
  console.log("###################################");
  
}


function add() {
  //without return type without argument
  var no1 = 100;
  var no2 = 200;

  var sum = no1 + no2;
  console.log("sum -->", sum);
  drawLine(); //calling part
}

add(); //calling part

function mul() {
  var no1 = 120;
  var no2 = 2;

  var mul = no1 * no2;
  console.log("mul -->", mul);
  drawLine();
}

mul(); //calling part
