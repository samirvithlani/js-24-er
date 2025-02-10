// const isValid = ()=>{
//     console.log("is valid called....")
// }

const isValid = (name)=>{
    
    if(name.length<5){
        return false
    }
    return true;
}
//isValid()
var ans = isValid("ramyana")
console.log("ans = ",ans)