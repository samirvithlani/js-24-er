var marks = [90,78,85,88,95];

// var flag = false;
// for(let i=0;i<marks.length;i++){



//     if(marks[i]>=95){
//         flag = true
//         break;
//     }

// }

// var flag = marks.some((m)=>{
//     return m>=96
// })
//console.log("flag...",flag);


var flag = marks.every((m)=>{

    return m>=35
})
console.log("flag...",flag);

