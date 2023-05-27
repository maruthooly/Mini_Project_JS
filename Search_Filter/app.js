const result = document.getElementById("result");
const fillter = document.getElementById("filter");
const listItems = [];

fillter.addEventListener("input",(e)=>{
    const search = e.target.value.toLowerCase()
    listItems.forEach(item=>{
        if(item.innerText.toLowerCase().includes(search)){
            //display
            item.classList.remove("hide");
        }else{
            //
            item.classList.add("hide");
        }
    })
       
    console.log(search)
})
let getData = async()=>{
    const url = "https://restcountries.com/v3.1/all";
    const res = await fetch(url)
    result.innerHTML=""
    const items = await res.json()
    console.log(items)
    items.forEach(data => {
        const li = document.createElement("li")
        listItems.push(li)
        li.innerHTML= `
            <img src="${data.flags.png}">
            <div class = "info">
                <h4> ${data.name.common}</h4>
                <p>${formatNumber(data.population)}</p>
            </div>
        `
        result.appendChild(li)
    });
    
}


function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  
getData();