function redirecionarPagina(link) {
    window.location.href = link+".html"
}

export function redirecionarTabelaEstagiarios() {
    redirecionarPagina("estagiarios")
}

export function redirecionarPaginaLogin() {
    redirecionarPagina("login")
}