
const science = (user)=>{

    console.log("Science student is: ",user);
}
const commerce = (user)=>{
    console.log("Commerce student is: ",user);
}
const arts = (user)=>{
    console.log("Arts student is: ",user);
}




const admission = (user,cb)=>{

    //user = {name:"raj",age:21}
    //cb(user)
    cb(user)
}

admission({name:"raj",age:21},commerce)