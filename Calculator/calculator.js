let string = ""
let input = document.querySelector(".input input")
let btn = document.querySelectorAll("button")
btn.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string)
            document.querySelector("input").value = string
        }
        else if(e.target.innerHTML == "Del"){
            string = ""
            document.querySelector("input").value = string
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string

        }
    })
        
})