const getButton =()=>{
    const button = document.getElementsByClassName('btn');
    //console.log(button[0]);
    for(let i=0;i<button.length;i++){
        console.log(button[i].getAttribute('data-value'));
    }
}