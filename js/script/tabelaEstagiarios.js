import * as EstagiarioCRUD from "../EstagiarioCRUD.js"

let tbody = document.querySelector("#tabela tbody")

EstagiarioCRUD.getEstagiarios().forEach(estagiario => {
    let tr = criarTR(estagiario)
    tbody.innerHTML = tbody.innerHTML + tr
})

function criarTR(estagiario) {

    return `
    <tr>
        <td>${estagiario.nome}</td>
        <td>${estagiario.cpf}</td>
        <td>${estagiario.genero}</td>
        <td>${estagiario.endereco}</td>
        <td>${estagiario.dataNascimento}</td>
        <td>${estagiario.empresaNome}</td>
        <td>${estagiario.cargo}</td>
        <td>${estagiario.ativo}</td>
        <td>${estagiario.bolsaAuxilio}</td>
        <td>${estagiario.feriasSolicitadasTotal}</td>
        <td>${estagiario.dataInicio}</td>
        <td>${estagiario.dataFim}</td>
    </tr>
    `
}