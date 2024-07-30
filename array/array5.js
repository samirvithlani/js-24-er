var data = ["java","hindi","python","english","cpp",""]
console.log(data)

var flag = false;

for(let i=0;i<data.length;i++){

    // if(data[i]==""){
    //     flag=true;
    //     break;
    // }

    if(data[i].length==0){
        flag=true;
        break;
    }

}
console.log("flag",flag)