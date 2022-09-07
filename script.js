document.addEventListener("DOMContentLoaded", function(event) {

let name = document.getElementById("name");
// console.log(name);

});

document.addEventListener("submit", function(event) {
    event.preventDefault(); // TODO remove me

    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;

    const isNameValid = validateName(name);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(password, confirmPassword);
    const isEmailValid = validateEmail(email);

    displayError(!isNameValid, document.getElementById("name_error"));
    displayError(!isPasswordValid, document.getElementById("password_error"));
    displayError(!isConfirmPasswordValid, document.getElementById("confirmPassword_error"));
    displayError(!isEmailValid, document.getElementById("email_error"));

    validRegistration(isNameValid, isPasswordValid, isConfirmPasswordValid, isEmailValid, name, email, date);

});

function validRegistration(isNameValid, isPasswordValid, isConfirmPasswordValid, isEmailValid, nameValue, emailValue, dateValue) {
    if (isNameValid === isPasswordValid === isConfirmPasswordValid === isEmailValid === true) {
        let userList = document.getElementById("userList");
        userList.innerHTML = nameValue + " - " + emailValue + " - " + dateValue;
    }
}

function displayError(display, element) {
    if (display) {
        element.style.display = 'block';
    }
}

function validateName(name) {
    let nameLength = name.length;
    return nameLength > 4 && nameLength < 64;
}
function validatePassword(password) {
    let passwordLength = password.length;
    return passwordLength > 8 && passwordLength < 64;
}
function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword;
}
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
