var departments = [
    {
        name:"IT",
        employees:[
            {
                name:"amit",
                age:23,
                gender:"male",
                isActive:true
            },
            {
                name:"sumit",
                age:25,
                gender:"male",
                isActive:true
            },
            {
                name:"seeta",
                age:26,
                gender:"female",
                isActive:true
            }
        ]
    },
    {
        name:"HR",
        employees:[
            
            {
                name:"geeta",
                age:32,
                gender:"female",
                isActive:true
            },
            {
                name:"harita",
                age:36,
                gender:"female",
                isActive:false
            },
        ]
    },
    {
        name:"Finance",
        employees:[
            
            {
                name:"ajay",
                age:35,
                gender:"male",
                isActive:true
            },
            {
                name:"axit",
                age:37,
                gender:"male",
                isActive:true
            },
            {
                name:"parth",
                age:39,
                gender:"male",
                isActive:true
            },
            {
                name:"sunit",
                age:42,
                gender:"male",
                isActive:false
            }
            
        ]
    },
]

//print all department names
//find female employee from finance department
//find male and active employee from it department
//find all inactive employee from it department

// var deptnames =  departments.map((dept)=>{
//     return dept.name
// })

var deptnames = departments.map((dept)=>dept.name)
console.log(deptnames)

var femalefromfin = departments.find((dept)=>dept.name == "Finance").employees.
filter((emp)=>emp.gender==="female")
console.log(femalefromfin)

var femalefromfin = departments.find((dept)=>dept.name == "IT").employees.
filter((emp)=>emp.gender==="male"&& emp.isActive)
console.log(femalefromfin)
//mcqs.filter((mcq)=>mcq.std =="12")