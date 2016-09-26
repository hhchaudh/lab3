var contentInPwFieldInitial = document.getElementById("pwFieldInitial");
var contentInPwFieldValidation = document.getElementById("pwFieldValidation");

function pwsAreEqual() {
    if (contentInPwFieldInitial.value === contentInPwFieldValidation.value) {
        return true;
    } else {
        return false;
    }
}

function pwLongEnough() {
    if (contentInPwFieldInitial.value.length < 8 ) {
        return false;
    } else {
        return true;
    }
}

function checkPw() {
    if(!pwLongEnough()) {
        alert("The password must be at least 8 characters long");
    } else if (!pwsAreEqual()) {
        alert("The passwords entered are not equal");
    } else {
        alert("The passwords are valid");
    }
}
