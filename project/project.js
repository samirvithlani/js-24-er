window.addEventListener("DOMContentLoaded", () => {
    const text =
      "Narendra Damodardas Modi is an Indian politician who has served as Prime Minister of India since 2014. Modi was the chief minister of Gujarat from 2001 to 2014 and is the member of parliament for Varanasi.";
    const para = document.getElementById("para");
    para.innerHTML = text;
  
    const timerElement = document.getElementById("timer");
    const startButton = document.getElementById("startButton");
    let timerInterval; 
  
    startButton.addEventListener("click", () => {
      let remainingTime = 60;
  
      // Clear any existing interval
      clearInterval(timerInterval);
  
      // Start countdown
      timerInterval = setInterval(() => {
        const minutes = Math.floor(remainingTime / 60).toString().padStart(2, "0");
        const seconds = (remainingTime % 60).toString().padStart(2, "0");
        timerElement.textContent = `${minutes}:${seconds}`;
  
        if (remainingTime <= 0) {
          clearInterval(timerInterval);
          alert("Time is up!");
        }
  
        remainingTime--;
      }, 1000);
    });
  });
  