var company =[
    {
        name:"google",
        employees:[
            {
                name:"Sundar Pichai",
                age:47,
                post:"CEO",
                salary:200000
            },
            {
                name:"Larry Page",
                age:46,
                post:"Founder",
                salary:300000
            }
        ]
    },
    {
            name:"facebook",
            employees:[
                {
                    name:"Mark Zuckerberg",
                    age:35,
                    post:"CEO",
                    salary:250000
                },
                {
                    name:"Dustin Moskovitz",
                    age:35,
                    post:"Founder",
                    salary:350000
                }
            ]
    }
]


// console.log(company[0].name)
// console.log(company[1].name)
// company.forEach((comp)=>{
//     console.log(comp.name)
// })

var compnayNames = company.map((comp)=>{

    return comp.name
})
console.log(compnayNames)

var googleObj = company.find((comp)=>{
    return comp.name === "google"
})
console.log(googleObj)

//map --> array
//filter --> array  
//find --> object
var googleEmp = company.find((comp)=>{
    return comp.name === "google"
}).employees
console.log(googleEmp)

//console.log(googleEmp.employees)

var facebookemp = company.find((comp)=>{

    return comp.name === "facebook"
}).employees
console.log(facebookemp)