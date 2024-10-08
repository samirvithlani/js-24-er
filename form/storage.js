function storeData(){


    var no1 = 10;
    var no2 = 20;
    var ans = no1 + no2;

    localStorage.setItem("no1", no1);
    localStorage.setItem("no2", no2);
    localStorage.setItem("ans", ans);


}

function getData(){


    var no1 = localStorage.getItem("no1");
    var no2 = localStorage.getItem("no2");
    var ans = localStorage.getItem("ans");

    const output = document.getElementById('output');
    output.innerHTML = "The sum of " + no1 + " and " + no2 + " is " + ans;



}