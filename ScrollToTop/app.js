//0 - 100%
const scrollBtn =  document.querySelector(".top")
const rootEl = document.documentElement

let scrollTop = ()=>{
    rootEl.scrollTo({
        top:0,
        behavior : "smooth"
    })
}

let showBtn = ()=>{
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight
    if(rootEl.scrollTop/scrollTotal>0.8){
        scrollBtn.classList.add("show-btn")
    }else{
        scrollBtn.classList.remove("show-btn")
    }
}
document.addEventListener("scroll",showBtn)
scrollBtn.addEventListener("click",scrollTop)