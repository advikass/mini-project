const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const uname=document.querySelector("#uname")
const password=document.querySelector("#password")
const pass_div=document.querySelector("#div-pass")
const u_div=document.querySelector("#div-uname")
const btn_login=document.querySelector(".login")
const all_input_field=document.querySelector(".input-field");
var check_box=document.querySelector(".mg-scrn")
var error_field=document.getElementById("signin-error");


check_box.addEventListener("change",changeState)

sign_up_btn.addEventListener("click", () => {
  check_box=document.querySelector(".mg-scrn")
  check_box.addEventListener("change",changeState)
  container.classList.add("sign-up-mode");
});

const mediaQuery = window.matchMedia('(max-width: 570px)')
mediaQuery.addListener(()=>{
  if (mediaQuery.matches) {
    for(i=0;i<all_input_field.length;i++)
      all_input_field[i].classList.remove("input-field-magnify");
  }
  
})
// Check if the media query is true
sign_in_btn.addEventListener("click", () => {
  check_box=document.querySelector(".mg-scrn")
  check_box.addEventListener("change",changeState)
  container.classList.remove("sign-up-mode");
});

btn_login.addEventListener("click",()=>{
  if(uname.value!="Alex")
    u_div.classList.add("invalid-credential")
  else
    u_div.classList.remove("invalid-credential")
});

function changeState(){
  var all_input_field=document.getElementsByClassName("input-field");
  if(check_box.checked)
  {
    for(i=0;i<all_input_field.length;i++)
      all_input_field[i].classList.add("input-field-magnify");
  }
  else
    for(i=0;i<all_input_field.length;i++)
      all_input_field[i].classList.remove("input-field-magnify");

}

const loadPage=()=>{
  window.location.href = '../homepage.html';
}
const validateData=(tag,pattern,name,msg)=>{
  var div_name=document.getElementsByClassName(name);
  if(tag.value.search(pattern)==-1)
  {
    div_name[0].classList.add("invalid-credential")
    div_name[0].classList.remove("valid")
    // error_field[0].classList.add("small.erro")
    error_field.innerHTML=msg
    error_field.classList.add("error")
    error_field.classList.remove('noerror')
  }
  else
  {
    div_name[0].classList.remove("invalid-credential")
    div_name[0].classList.add("valid")
    error_field.classList.add("noerror")
    error_field.classList.remove('error')
  }
}

// check_box[1].addEventListener("change",changeState())


