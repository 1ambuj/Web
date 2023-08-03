let hour = document.querySelector(".hour .digit")
let minute = document.querySelector(".minute .digit")

let second = document.querySelector(".second .digit")

setInterval(()=>{
    d = new Date()
    h = d.getHours()
    if(h<10){
        h = "0" + h
    }
    hour.textContent = h
    m = d.getMinutes()
    if(minute<10){
        m = "0" + h
    }
    minute.textContent = m
    s = d.getSeconds();
    if(s<10){
        s = "0" + s
    }
    second.textContent = s
},1000)

