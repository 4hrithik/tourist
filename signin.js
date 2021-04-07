let email=document.getElementById("email");
let pwd=document.getElementById("pwd");
let err=document.getElementById("err");

function validate(){
    if(email.value==""||pwd.value==""){
        alert("fields cannot be blank");
        return false;
    }
    else if(pwd.length!=8){
        alert("invalid")
        pwd.focus();
        return false;

    }
    else{
        return true;
    }
}