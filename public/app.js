//signupForm form validation and local storage 

const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
let userData = {}

const showPass = (e) => {

    if (e.className == "fas fa-eye eye") {
        password.type = "text"
        e.className = "fas fa-eye-slash eye"

    } else {
        password.type = "password"
        e.className = "fas fa-eye eye"
    }

    // console.log(e);

}


const creatAcc = (e) => {
    if (userName.value !== "" && email.value !== "" && password.value !== "") {

        userData = {
            userName: userName.value,
            email: email.value,
            password: password.value

        }

        localStorage.setItem("user", JSON.stringify(userData))

        alert("Congrats Now...! You Have An Account")

        window.location.assign("./login.html")

    } else {
        alert("please Enter These Fields")
    }

}



const loginPage = () => {
    let message = prompt("If You Have A account Type 'Yes' if you dont Have a acount So type 'no'").toLowerCase()
    // console.log(message);
    if (message === "yes") {
        window.location.assign("./login.html")
    }
    else {
        alert("Please Create your account")
    }
}



//login form local storage getting

const emailInp = document.getElementById("emailInp");
const passInp = document.getElementById("passInp");

const login = () => {

    const localData = JSON.parse(localStorage.getItem("user"))

    if (emailInp.value === localData.email && passInp.value === localData.password) {
        alert("Succesfully Login")
        window.location.assign("./dashboard.html")
    } else {
        alert("invalid")
    }
}


// dashBoard Setting
const showDashBoard = () => {
    let showUserName = document.getElementById("showUserName")
    let showEmail = document.getElementById("showEmail")
    const localData = JSON.parse(localStorage.getItem("user"))
    // console.log(localData);
    showUserName.innerHTML = localData.userName;
    showEmail.innerHTML = localData.email

}