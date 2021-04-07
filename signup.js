
let pno=document.getElementById("pno");
let error=document.getElementById("error");
let email=document.getElementById("email");
let pw1=document.getElementById("pw1");
let pw2=document.getElementById("pw1");

let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
let phone=/^[7-9]\d{9}$/;
let pass=/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20}$/;

function validate(){
    if(regexp.test(email.value!="1")){
        window.alert("email id is valid");
        return false;
    }
    else if(phone.test(pno.value)!="1"){
        window.alert("phone is invalid!!! please enter valid phone number");
        return false;
    }
    else if(pass.test(pw1)!=1){
        window.alert("password is invalid");
        window.alert("password should be of 8 characters with atleast one uppercase,atleast one lower case,special character ");
        window.alert("please re enter the password");
        return false;
    }
    else if(pw1.value!=pw2.value){
        window.alert("password does'nt match");
        window.alert("try again");
    }
    else{
        return true;
    }
}


