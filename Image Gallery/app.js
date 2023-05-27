const smallImg = document.querySelectorAll(".gallery img")
const fullImg = document.querySelector(".full-image") 
const model = document.querySelector(".model")
smallImg.forEach(img =>{
    img.addEventListener('click',()=>{
        const fullsize = img.getAttribute("alt")
        const part = `foods-images/full/${fullsize}.jpg`
        fullImg.src=part
        model.classList.add("open")
    })
})
model.addEventListener('click',(e)=>{
    if(e.target.classList.contains("model") || e.target.classList.contains("full-image")){
        model.classList.remove("open")
    }
})