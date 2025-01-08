function pas(event) {
    let password = document.getElementById("pass").value;
    let message = document.getElementById("masspass");

    // Validate password: 6-18 characters, at least one uppercase, one lowercase, one digit, and one special character
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,18}$/;

    if (!regex.test(password)) {
        message.style.color = "red";
        message.innerHTML = "Password must be 6-18 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    } else {
        message.style.color = "green";
        message.innerHTML = "Password is valid.";
    }
}

function equalpass(event) {
    let password = document.getElementById("pass").value;
    let confirmPassword = document.getElementById("pass2").value;
    let message = document.getElementById("masspass2");

    if (password !== confirmPassword || password === "") {
        message.style.color = "red";
        message.innerHTML = "Passwords do not match!";
    } else {
        message.style.color = "green";
        message.innerHTML = "Passwords match.";
    }
}

function validatePhone(event) {
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("phoneMessage");

    // Regular expression: Must start with "077" and be exactly 10 digits
    let regex = /^077\d{7}$/;

    if (!regex.test(phone)) {
        message.style.color = "red";
        message.innerHTML = "Phone number must start with 077 and contain exactly 10 digits.";
    } else {
        message.style.color = "green";
        message.innerHTML = "Valid phone number.";
    }
}

function validateEmail(event) {
    let email = document.getElementById("email").value;
    let message = document.getElementById("txemail");

    // Regular expression for a valid email format
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
        message.style.color = "red";
        message.innerHTML = "Invalid email format. Example: username@domain.com";
    } else {
        message.style.color = "green";
        message.innerHTML = "Valid email.";
    }
}

function validateFullName(event) {
    let fullName = document.getElementById("namee").value;
    let message = document.getElementById("txname");

    let regex = /^[a-zA-Z\s]{3,}$/;

    if (!regex.test(fullName)) {
        message.style.color = "red";
        message.innerHTML = "Invalid name. Use only letters and spaces (min 3 characters).";
    } else {
        message.style.color = "green";
        message.innerHTML = "Valid name.";
    }
}


function sinin(event) {
    event.preventDefault();
    let emailValid = document.getElementById("txemail").style.color === "green";
    let nameValid = document.getElementById("txname").style.color === "green";
    let phoneValid = document.getElementById("phoneMessage").style.color === "green";
    let passValid = document.getElementById("masspass").style.color === "green";
    let passMatch = document.getElementById("masspass2").style.color === "green";
    let termsAccepted = document.querySelector("input[name='remember']:checked");

    if (emailValid && nameValid && phoneValid && passValid && passMatch && termsAccepted) {
        alert("Registration successful!");
        document.querySelector("form").submit();
    } else {
        alert("Please fill out all fields correctly.");
    }
}


function sinin(event) {
    event.preventDefault(); 

    let email = document.getElementById("email").value;
    let fullName = document.getElementById("namee").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("pass").value;
    let confirmPassword = document.getElementById("pass2").value;

    if (!email || !fullName || !phone || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    let userData = {
        email: email,
        fullName: fullName,
        phone: phone,
        password: password,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("Account created successfully!");
}


function haveacc() {
    window.location.href = "login.html"; 
}





function login(event) {
    event.preventDefault();
    
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    let message = document.getElementById("loginMessage");
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        message.style.color = "red";
        message.innerHTML = "Please enter a valid email address.";
        return;
    }

    if (password.length < 6) {
        message.style.color = "red";
        message.innerHTML = "Password must be at least 6 characters long.";
        return;
    }
    
    let storedUser = localStorage.getItem("user");

    if (!storedUser) {
        message.style.color = "red";
        message.innerHTML = "No account found. Please sign up first.";
        return;
    }

    let userData = JSON.parse(storedUser);

    if (email === userData.email && password === userData.password) {
        sessionStorage.setItem("fullName", userData.fullName);
        window.location.href = "dashboard.html";
    } else {
        message.style.color = "red";
        message.innerHTML = "Invalid email or password!";
    }
}
