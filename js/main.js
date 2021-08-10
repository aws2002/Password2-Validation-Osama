
const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
var Password    = document.getElementById("myPass");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const eye =document.querySelector(".far");
const text_stat =document.querySelector(".text_stat");
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,$,#,%,^,&,*,),(,-,_,~]/;

var state =false;
function showPasstoggle() {
    if(state){
        document.getElementById("myPass").setAttribute("type","password");
        document.getElementById("eye").setAttribute("class","far fa-eye");
        state=false;
    }
    else{
        document.getElementById("myPass").setAttribute("type","text");
        document.getElementById("eye").setAttribute("class","far fa-eye-slash");
        state=true;
    }
}

function trigger(){
    if(Password.value !=""){
        indicator.style.display ="block";
        indicator.style.display ="flex";
        eye.style.display ="block";
        if(input.value.length <=3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
        if(input.value.length >=6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium)) && input.value.match(regExpStrong)) || (input.value.match(regExpStrong)))no=2;
        if(input.value.length >=6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;

        if(no==1){
            weak.classList.add("active");
            text_stat.style.display ="block";
            text_stat.textContent="Your password is too week";
        }
        //////////////////////////////////
        if(no==2){
            medium.classList.add("active");
            text_stat.textContent="Your password is too medium";
        }else{
            medium.classList.remove("active");
        }
        /////////////////////////////////
        if(no==3){
            medium.classList.add("active");
            strong.classList.add("active");
            text_stat.textContent="Your password is too strong";
        }
        else{
            strong.classList.remove("active");
        }
        /////////////////////
    }else{
        indicator.style.display ="none";
        eye.style.display ="none";
        text_stat.style.display ="none";
    }
}
