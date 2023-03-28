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
let total = questions.length
let right = 0;
let wrong = 0;
let option_input = document.querySelectorAll(".option")
let option_selector = document.querySelectorAll(".leb")
//console.log(option_selector[0].textContent)
let quest = document.querySelector(".ques")
const question_declaration = ()=>{
    if(index == total){
        return endQuiz()
    }
    recet()
    const data = questions[index]
    quest.textContent = `${index + 1})${data.que}`
    option_input[0].nextElementSibling.textContent = data.a
    option_input[1].nextElementSibling.textContent = data.b
    option_input[2].nextElementSibling.textContent = data.c
    option_input[3].nextElementSibling.textContent = data.d 
  

}
const get_submit =() =>{
    const data = questions[index]
    const answ = get_answer()
    //console.log(answ,data.correct)
    if(answ==data.correct){
        right++
    }else{
        wrong++
    }
    index = index+1
    question_declaration()
    return;

}
const get_answer = ()=>{
    let answer; 
    option_input.forEach(
        (input)=>{
              if(input.checked){
                    console.log(input.value);
              }
    })
    return answer;
}
const recet = ()=>{
    option_input.forEach((input)=>{
        input.checked= false
    })
}
const endQuiz = () =>{
    document.querySelector(".box").innerHTML =
    `<h3>Thanks for playing quiz <h3>
    <h2>${right}/${total} are correct </h2>
    `
}
//get_submit()
question_declaration()