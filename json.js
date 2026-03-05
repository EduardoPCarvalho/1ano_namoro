// DATA DO COMEÇO DO NAMORO
let dataInicio = new Date("2025-03-02 22:00:00")

function atualizarContador(){

let agora = new Date()

let diferenca = agora - dataInicio

let segundos = Math.floor(diferenca / 1000)
let minutos = Math.floor(segundos / 60)
let horas = Math.floor(minutos / 60)
let dias = Math.floor(horas / 24)
let anos = Math.floor(dias / 365)

segundos = segundos % 60
minutos = minutos % 60
horas = horas % 24
dias = dias % 365

document.getElementById("contador").innerHTML =
anos + " ano ❤️ " +
dias + " dias ❤️ " +
horas + " horas ❤️ " +
minutos + " minutos ❤️ " +
segundos + " segundos"

}

setInterval(atualizarContador,1000)

atualizarContador()


// MUSICA

function tocarMusica(){

document.getElementById("musica").play()

}


// CORAÇÕES

function criarCoracao(){

let heart = document.createElement("div")

heart.classList.add("heart")

heart.innerHTML="❤️"

heart.style.left = Math.random()*100 + "vw"

heart.style.fontSize = (Math.random()*20+10)+"px"

document.querySelector(".hearts").appendChild(heart)

setTimeout(()=>{
heart.remove()
},5000)

}

setInterval(criarCoracao,300)