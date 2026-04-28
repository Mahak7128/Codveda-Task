
const form = document.getElementById("myForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const successMsg = document.getElementById("successMsg");

console.log(form);

function validateName() {
    if(nameInput.value.trim() === ""){
        nameError.textContent = "Name is required";
        return false;
    }
    nameError.textContent = "";
    return true;
}

function validateEmail(){
     const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
     if (!regex.test(emailInput.value)){
        emailError.textContent = "Invalid email format";
        return false;
     }
     emailError.textContent = "";
     return true;
}

function validatePhone() {
    const regex = /^[0-9]{10}$/;
    if (!regex.test(phoneInput.value)) {
        phoneError.textContent = "Enter 10 digit phone number";
        return false;
    }
    phoneError.textContent = "";
    return true;
}

function validatePassword() {
    const val = passwordInput.value;
    if(val.length < 6){
        passwordError.textContent = "Include 1 uppercase & 1 number";
        return false;
    }
    if (!/[A-Z]/.test(val) || !/[0-9]/.test(val)) {
        passwordError.textContent = "Include 1 uppercase & 1 number";
        return false;
    }
    passwordError.textContent = "";
    return true;
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
passwordInput.addEventListener("input",validatePassword);

[nameInput,emailInput,phoneInput,passwordInput].forEach(input => {
    input.addEventListener("focus",() => {
        input.style.backgroundColor = "#eef5ff";
    });
    input.addEventListener("blur",() => {
        input.style.backgroundColor = "white";
    });
});


form.addEventListener("submit",function(e) {
    e.preventDefault();

    const isValid = 
    validateName() && validateEmail() && validatePhone() && validatePassword();

    if(isValid) {
        successMsg.textContent= "Form submitted successfully";
        form.reset();
    }
    else {
        successMsg.textContent="";
    }
 })

