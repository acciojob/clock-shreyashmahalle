//your JS code here. If required.
function updateTimer(){
const now new Date();
document.getElementById("timer").textContent = now.tolocaleString();
}

setInterval(updateTimer, 1000);
updateTimer();