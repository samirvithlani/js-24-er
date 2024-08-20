// var student = {
//     sname:"amit",
//     sage:25,
//     scity:"pune",
// }

// console.log(student.sname);
// console.log(student.sage);
// console.log(student.scity);

var students = [
    {
        sname:"amit",
        sage:25,
    },
    {
        sname:"sumit",
        sage:24,
    },
    {
        sname:"ram",
        sage:23,
    }
]

console.log(students);

students.push({sname:"shyam",sage:25})
//students.push("oopkpoo")

for(let i=0;i<students.length;i++){

    console.log(students[i].sname , students[i].sage);
}

