import { isLogin, login, logout } from "../Login.js"
import { redirecionarPaginaLogin } from "../Redirect.js"

let inputUsername = document.querySelector(".inputLabel #username")
let inputPassword = document.querySelector(".inputLabel #password")

let btnLogin = document.querySelector("#btnLogin")

if(btnLogin !== null)
    btnLogin
        .addEventListener("click", function(e) {
            e.preventDefault()

            let username = inputUsername.value
            let password = inputPassword.value

            login(username, password)
        })

document.querySelector("#btnLogout")
    .addEventListener("click", function(e) {
        e.preventDefault()

        logout()
    })

if(!isLogin() && !window.location.href.includes("login"))
    redirecionarPaginaLogin()
