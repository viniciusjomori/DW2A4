import { redirecionarPaginaLogin, redirecionarTabelaEstagiarios } from "./Redirect.js"

const admDados = {
    username: "adm",
    password: "senha"
}

function loginSuccess() {
    localStorage.setItem("login", true)
    redirecionarTabelaEstagiarios()
}

function loginFail() {
    alert("Usuário ou senha incorretos")
}

export function logout() {
    localStorage.setItem("login", false)
    redirecionarPaginaLogin()
}

export function login(username, password) {
    localStorage.setItem("login", false)

    console.log(username, password)

    if(username === admDados.username && password === admDados.password) {
        loginSuccess()
    } else {
        loginFail()
    }
}

export function isLogin() {
    return JSON.parse(localStorage.getItem("login"))
}