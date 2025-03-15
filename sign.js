let password = document.getElementById("Password");
let eye = document.querySelector(".eye");

eye.onclick = function (){
    if(password.type == "password"){
        password.type = "text";
        eye.src = "eye.png"
    } else {
        password.type = "password";
        eye.src = "eye.png"
    }
}