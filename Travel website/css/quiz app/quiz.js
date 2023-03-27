const questions = [
    {
        'que':"which of the markep language",
        'a':'HTML', 
        'b':'CSS',
        'c':'JAVASCRIPT',  
        'd':'SQL',
        'correct':'a' 
    },
    {
        'que':"programing language is",
        'a':'HTML', 
        'b':'CSS',
        'c':'JAVASCRIPT',  
        'd':'SQL',
        'correct':'c' 
    },
    {
        'que':"CSS stand for",
        'a':'cascading style sheet' , 
        'b':'clean style sheet',
        'c':'clear style sheet',  
        'd':'clear stron sheet',
        'correct':'a' 
    }
    
]
let index = 0
let option_selector = document.querySelectorAll(".leb")
//console.log(option_selector[0].textContent)
let quest = document.querySelector(".ques")
const question_declaration = ()=>{
    const data = questions[index]
    quest.textContent = `${index + 1})${data.que}`
    option_selector[0].textContent = data.a
    option_selector[1].textContent = data.b
    option_selector[2].textContent = data.c
    option_selector[3].textContent = data.d 

}
const get_submit =() =>{
    index = index+1
}
get_submit()
question_declaration()