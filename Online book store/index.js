let login_page = document.querySelector(".login-form-container")

document.querySelector("#login-btn").onclick = () =>{
    login_page.classList.toggle('active')
  
}
// let click = document.querySelector("#login-btn");
// click.textContent

document.querySelector("#close-login-btn").onclick = () =>{
    login_page.classList.remove('active')
  
}