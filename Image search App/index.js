const acsses_key = "RuITHDREVf-xGc_lp6QWF6zjkzSwBYfThQdPM4IlEIw" 

const formE = document.querySelector("form")

const inputE = document.getElementById("serch")

const buttons = document.querySelector(".input-box button") 

const search_results = document.querySelector(".images")

const search_result = document.querySelector(".image")

const showMore = document.querySelector(".btn")


let inputData = ""
let page = 1;

async function searchImages(){
    inputData = inputE.value ; 
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${acsses_key}`

    const response =await fetch(url)
    const data = await response.json()
    const results = data.results 

    if(page===1){
        search_results.innerHTML = ""
    }
    results.map((result) =>{
        const imgWrapper = document.createElement('div')
        imgWrapper.classList.add("image")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_discription
        const imageLink =document.createElement('a')
        imageLink.href = result.links.html 
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description 

        imgWrapper.appendChild(image)
        imgWrapper.appendChild(imageLink) 
        search_results.append(imgWrapper)
    })
    page++
    if(page>1){
        showMore.style.display = "block"
    }
}

formE.addEventListener("submit",(event)=>{
    event.preventDefault()
    page = 1;
    searchImages()
})

showMore.addEventListener('click',()=>{
    searchImages()
})

