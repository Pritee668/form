let user=document.getElementById('user');
let pass=document.getElementById('pass');
let userP=document.getElementById('user-error');
let passP=document.getElementById('pass-error');
let flag=1;
 function validateform(){
    if(user.value==""){
        userP.innerHTML="UserName is empty!";
        flag=0;
    }else if(user.value.length<3){
        userP.innerHTML="usename require min 3 char!";
        flag=0;
    }else{
        userP.innerHTML="";
        flag=1;
    }
    if(pass.value==""){
        passP.innerHTML="Password is empty!";
        flag=0;
    }
    else if(pass.value.length<3){
        passP.innerHTML="password require min 3 value!";
        flag=0;
    }
    else{
        passP.innerHTML="";
        flag=1;
    }
    if(flag){
        return true;
    }
    else{
        return false;
    }
 }