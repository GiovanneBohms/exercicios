const start = document.getElementById("start")
const h2 = document.getElementById("h2")


start.innerHTML = "hehehe"


function clickNoStart(){
    h2.innerHTML = "oi"
   
}

start.addEventListener("click",clickNoStart)