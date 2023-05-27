const openBTN = document.querySelector(".open-btn")
const closeBTN = document.querySelector(".close-btn")
const modalContainer = document.querySelector(".modal-container")

openBTN.addEventListener("click",()=>{
    modalContainer.classList.add("show")

})

closeBTN.addEventListener("click",()=>{
    modalContainer.classList.remove("show")

})