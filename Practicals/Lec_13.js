// Get elements (declare only once)
let username = document.getElementById("username");
let password = document.getElementById("password");
let userError = document.getElementById("userError");
let passError = document.getElementById("passError");
let message = document.getElementById("message");

// Real-time validation for username
username.addEventListener("keyup", function() {
    if(username.value.trim() === "") {
        userError.textContent = "Username is required!";
        username.style.border = "2px solid red";
    } else {
        userError.textContent = "";
        username.style.border = "2px solid green";
    }
});

// Real-time validation for password
password.addEventListener("keyup", function() {
    if(password.value.length < 4) {
        passError.textContent = "Password must be at least 4 characters!";
        password.style.border = "2px solid red";
    } else {
        passError.textContent = "";
        password.style.border = "2px solid green";
    }
});
// Form submission validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting to server
    let valid = true;   
    if(username.value.trim() === "") {
        userError.textContent = "Username is required!";
        username.style.border = "2px solid red";
        valid = false;
    } else {
        userError.textContent = "";
        username.style.border = "2px solid green";
    }   
    if(password.value.length < 4) {
        passError.textContent = "Password must be at least 4 characters!";
        password.style.border = "2px solid red";
        valid = false;
    } else {
        passError.textContent = "";
        password.style.border = "2px solid green";
    }
    if(valid) {
        message.textContent = "Login successful!";
        message.className = "success";
    } else {
        message.textContent = "Please fix the errors above.";
        message.className = "error";
    }
});
