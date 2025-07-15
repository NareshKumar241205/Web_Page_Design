const username = document.getElementById("name");
const password = document.getElementById("password");
const mobileNumber = document.getElementById("mobile");

function containsNum(name) {
    for(let character of name){
        if(!isNaN(character))
            return true;
    }
    return false;
}

function validate(){

    if(username.value == "" && password.value == "" && mobileNumber.value == ""){
        alert("Please fill the details");
        return;
    }
    else if(username.value == ""){
        alert("Please enter your name");
        return;
    }
    else if(password.value == ""){
        alert("Please enter password");
        return;
    }
    else if(mobileNumber.value == ""){
        alert("Please enter you mobile number");
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
        else if(mobileNumber.value.length > 10){
            alert("Mobile Number length should not exceed 10");
            return;
        }
        else{
            window.location.href = 'Index.html';
            alert("Account created Successfully");
        }
    }
}