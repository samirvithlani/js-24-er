var marks = [67,89,78,66,45]

// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }

// marks.forEach((m)=>{

//     console.log(m);
// })

// var newmarks = []
// for(let i=0;i<marks.length;i++){

//     newmarks.push(marks[i]+5)
// }
// console.log(newmarks);



var newmarks = marks.map((m)=>{
    
    return m+5
})
console.log(newmarks);

var data = ["ram","shyam","hari","kishan"]

// var upperData = []

// for(let i=0;i<data.length;i++){

//     upperData.push(data[i].toUpperCase())

// }

// console.log(upperData);


// var upperData = data.map((d)=>{
//     return d.toUpperCase()
// })

var upperData = data.map((d)=>d.toUpperCase())
console.log(upperData);

