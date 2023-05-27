const progressEl = document.querySelector(".progress")
window.onscroll=()=> scrollProgress()

let scrollProgress=()=>{
    //0-1.0
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollPercen = (scrollTop/pageHeight)*100
    progressEl.style.visibility="visible"
    progressEl.style.width=scrollPercen+"%"
}