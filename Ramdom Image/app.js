const container = document.querySelector(".container");
const rows = 2
const cols = 3
let random = ()=>{
   return Math.floor(Math.random()*500)
}
for(let i =0;i<rows*cols;i++){
    const url  = `https://source.unsplash.com/random/${random()}/?client_id=jJ1WYc-IDIAAxMgoBFfr8ooYwV6AEHM_U42lauXowqE`
    const images = document.createElement("img")
    images.src = url
    container.appendChild(images)
}