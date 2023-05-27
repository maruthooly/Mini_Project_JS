const nav = document.querySelector(".nav");


let stickyNavbar = ()=>{
    if(window.scrollY>nav.offsetHeight+200){
        nav.classList.add("active")
    }else{
        nav.classList.remove("active")
    }
}
window.addEventListener("scroll",stickyNavbar)
