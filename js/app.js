// LOGIN FORM //

function stringToHash(string) {
    let hash = 0;
    if (string.length == 0) return hash;
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
}
 
function passwordIsCorrect(password) {
    hashedPassword = stringToHash(password);
    return hashedPassword == '1217426811';
}

const userLogin = false

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "MasterJB" && passwordIsCorrect(password)) {
        alert("Bienvenue, Maître JB.");
        window.location.replace("./html/welcome.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})