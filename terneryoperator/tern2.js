var marks = 70;
if (marks > 80) {
  console.log("Distinction");
} else if (marks > 70) {
  console.log("First Class");
} else if (marks > 60) {
  console.log("Second Class");
} else {
  console.log("Fail");
}
//ternary operator

marks > 80
  ? console.log("dist")
  : marks > 70
  ? console.log("first")
  : marks > 60
  ? console.log("second")
  : console.log("fail");

var temp = 35

temp > 40 
? console.log("Very Hot")
: temp > 30
? console.log("Hot")
: temp > 20
? console.log("Normal")
: console.log("Cold")


var age = 61
age > 60 
? console.log("Senior Citizen")
: age > 50 
? console.log("Middle Aged")
: age > 30
? console.log("Adult")
: console.log("Young")

