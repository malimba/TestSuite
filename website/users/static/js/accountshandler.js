//globals

//login globals
const lFrm = document.getElementById('login-form');
const lEmail = document.getElementById('login-email');
const lPass = document.getElementById('login-password');

// sign  up globals
const sFrm = document.getElementById('signup-form');
const sName = document.getElementById('signup-name');
const sEmail = document.getElementById('signup-email');
const sPass = document.getElementById('signup-password');
const sCPass = document.getElementById('signup-cpassword');

// for login event
$(document).ready(function(){
    lFrm.addEventListener('submit', (e) =>{
        //get all values from login globals
        const lEmailValue = lEmail.value.trim();
        const lPasswdValue = lPass.value.trim();

        let anyErrors = false;
        e.preventDefault();
        if (lEmailValue === '' || lEmailValue === null){
            //show error
            setInpError(lEmail, 'Email cannot be blank');
            anyErrors = true;
        }
        if (lPasswdValue === '' || lPasswdValue === null){
            //show error
            setInpError(lPass, 'Password cannot be blank');
            anyErrors = true;
        }
        if (!anyErrors) {
            setInpSuccess();
            sendLData(lEmailValue, lPasswdValue);
        }
    }
    );
});

//login ajax
function sendLData(eV, pV){
    $.ajax({
        url: "/accounts/login",
        type: 'POST',

        headers: {
            "X-CSRFToken" : $("input[name=csrfmiddlewaretoken]").val()
        },

        data: {
            'email' : eV,
            'password' : pV
        },

        success: function(result){

            response = JSON.parse(result).value;

            if(response === true){
                setSuccessFor(username);
                setSuccessFor(password);
                setTimeout(function(){

                    if (next){
                        window.location.replace(next.value);
                    }
                  else{window.location.replace('/home');}},3000)
                  }
            else{

                console.log(response);
            }

            },

        error: function(result){

            console.log(result);
        }
    })
}

//end of handling login event

//start of handling signup event

//for signup event
$(document).ready(function(){
    sFrm.addEventListener('submit', (e) =>{
        //get all values from signup globals
        const sEmailValue = sEmail.value.trim();
        const sNameValue = sName.value.trim();
        const sPasswdValue = sPass.value.trim();
        const sCPasswdValue = sCPass.value.trim();

        let anyErrors = false;
        e.preventDefault();
        if (sEmailValue === '' || sEmailValue === null){
            //show error
            setInpError(sEmail, 'Email cannot be blank');
            anyErrors = true;
        }
        if (sNameValue === '' || sNameValue === null){
            //show error
            setInpError(sName, 'Name field cannot be blank');
        }
        if (sPasswdValue === '' || sPasswdValue === null){
            //show error
            setInpError(sPass, 'Password cannot be blank');
            anyErrors = true;
        }
        if (sPasswdValue !== sCPasswdValue){
            //show error
            setInpError(sPass, 'Passwords do not match!');
            setInpError(sCPass, 'Passwords do not match!');
            anyErrors = true;
        }
        if (!anyErrors) {
            sendSData(sNameValue, sEmailValue, sPasswdValue);
        }
    }
    );
});

//for signup event
function sendSData(N, eV, pV){
    $.ajax({
        url: "/accounts/signup",
        type: 'POST',

        headers: {
            "X-CSRFToken" : $("input[name=csrfmiddlewaretoken]").val()
        },

        data: {
            'fullname' : N,
            'email' : eV,
            'password' : pV
        },

        success: function(result){

            response = JSON.parse(result).value;

            if(response === true){
                setSuccessFor(username);
                setSuccessFor(password);
                setTimeout(function(){

                    if (next){
                        window.location.replace(next.value);
                    }
                  else{window.location.replace('/home');}},3000)
                  }
            else{

                console.log(response);
            }

            },

        error: function(result){

            console.log(result);
        }
    })
}

//end of handling signup event

//function for handling user error
function setInpError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
}
//function for clearing all error messages
function setInpSuccess(){
    const errorSmalls = document.querySelectorAll('small');
    //loop through each small element and delete
    errorSmalls.forEach(function(smallElement){
            smallElement.remove();
        });
}