const username = document.getElementById("name");
const password = document.getElementById("password");

function containsNum(name) {
    for(let character of name){
        if(!isNaN(character))
            return true;
    }
    return false;
}

function login(){

    if(username.value == ""){
        alert("Please enter your name");
        return;
    }
    else if(password.value == ""){
        alert("Please enter password");
        return;
    }
    else{
        if(containsNum(username.value)){
            alert("Name should not contain numbers");
            return;
        }
        else if(password.value.length < 6){
            alert("Password should be atleast 6 characters long");
            return;
        }
        else{
            window.location.href = 'Index.html';
            alert("Login Successfully");
        }
    }
}