var users = [
  {
    id: 101,
    name: "ram",
    age: 22,
    gender: "male",
    city: "ahmedabad",
    salary: 23000,
  },
  {
    id: 102,
    name: "shyam",
    age: 24,
    gender: "male",
    city: "ahmedabad",
    salary: 25000,
  },
  {
    id: 103,
    name: "seeta",
    age: 24,
    gender: "female",
    city: "ahmedabad",
    salary: 28000,
  },
];

//get all users name

var usersName = users.map((user) => {
  return user.name;
});
console.log(usersName);
var usersNamewithsalary = users.map((user) => {
  return {
    name: user.name,
    salary: user.salary,
  };
});
console.log(usersNamewithsalary);

var usersNamewithsalarytax = users.map((user) => {
  return {
    name: user.name,
    salary: user.salary,
    //tax:user.salary*.10
    tax: user.salary >= 25000 ? user.salary * 0.1 : 0,
  };
});

console.log(usersNamewithsalarytax);



///

var femaleUser = users.filter((user)=>{
    return user.gender == "female"
})

console.log(femaleUser)