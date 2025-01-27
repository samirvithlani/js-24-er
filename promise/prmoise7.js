const generateExam = ()=>{


        return new Promise((resolve,reject)=>{

            setTimeout(() => {
                    resolve({id:1001,name:"js exam",marks:100,subject:"javascript"})
            }, 2000);
        })

}


const generateQuestions = (examData)=>{


    return new Promise((resolve,reject)=>{

        setTimeout(() => {
                resolve({examData,questions:[{q:"what is java"},{q:"what is javascript"},{q:"whp are you?"}]})
        }, 3000);
    })

}




const giveExam = async()=>{

    console.log("exam starts")
    console.log("generating exam")
    const examData = await generateExam()
    //console.log(examData)
    console.log("generating questions...")
    const questionData = await generateQuestions(examData)
    console.log(questionData)
}

giveExam()