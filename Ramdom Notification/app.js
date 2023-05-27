//Array 0-4
const btn = document.querySelector(".btn")
const container = document.querySelector(".container")
const messages=[
    "Good morning",
    "Hello world",
    "Good night",
    "Good love",
    "Good luck",
    "Marut"
]
btn.addEventListener("click",()=>createNotification())
    
let createNotification = ()=>{
        const notificationEl = document.createElement("div")
        notificationEl.classList.add("notification")
        notificationEl.innerText=randomMessage()
        container.appendChild(notificationEl)
        setTimeout(()=>{
            notificationEl.remove()
        },1000)
}

function randomMessage(){
    return messages[Math.floor(Math.random()*messages.length)]
    
}

