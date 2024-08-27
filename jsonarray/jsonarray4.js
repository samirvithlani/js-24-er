var country = [
    {
        name:"India",
        states:[
            {
                name:"Karnataka",
                population:61095297,
            },
            {
                name:"Tamil Nadu",
                population:72147030,
            },
            {
                name:"Maharashtra",
                population:112374333,
            },
            {
                name:"Uttar Pradesh",
                population:199812341,
            },
            {
                name:"Kerala",
                population:33406061
            },
            {
                name:"Telangana",
                population:35193978
            }
        ]
    },
    {
        name:"USA",
        states:[
            {
                name:"California",
                population:39538223,
            },
            {
                name:"Texas",
                population:29145505,
            }
        ]
    }
]
//print india's state

var totalpop = 0
// for(let i=0;i<country.length;i++){

//         if(country[i].name == "India"){
//             console.log(country[i].states)
//         }

// }

var totalpop = country.find((c)=>c.name == "India").states.reduce((sum,st)=>sum+st.population,0)
console.log(totalpop)