var data = ["ahmedabad","surat","rajkot","baroda","vapi","amreli","valsad"];
//data[0] == 
//data[1] ==
//data[2] ==
//var flag = false;

// for(let i=0;i<data.length;i++){

//     if(data[i].startsWith("a")==true){
//         flag = true;
//         break;
//     }
// }

// for(let i=0;i<data.length;i++){

//         if(data[i].length>9){
//             flag = true;
//             break;
//         }


// }

//predicate statment

// data.some(function(){

// })

//data[0]]
var flag = data.some((d)=>{

    //return d.startsWith("a")//ahmedabad.startsWith("a") == true
    //return d.length>10
    return d.includes("x")
    
})


console.log("flag...",flag);