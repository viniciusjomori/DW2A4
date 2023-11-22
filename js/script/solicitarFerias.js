import { calcularFerias } from "../CalculadoraFerias.js";
import {  editEstagiarioByIndex, getEstagiarioByIndex, getEstagiarios, getEstagiariosAtivos } from "../EstagiarioCRUD.js";
import { criarOptions, getEstagiarioFromSelect, getIndexFromSelect } from "../SelectEstagiario.js";
import { FeriasSolicitadas } from "../classes/FeriasSolicitadasClass.js";

let select_ = document.querySelector("#estagiarios select")

document.querySelector("#btnSelecionarEstagiario")
    .addEventListener("click", function(e) {
        e.preventDefault()

        const estagiario = getEstagiarioFromSelect(select_)

        if(estagiario.ativo) {
            abrirFormulario()
        } else {
            alert("Estagiário desligado")
            fecharFormulario()
        }
    })

document.querySelector("#btnSolicitarFerias")
    .addEventListener("click", function(e) {
        e.preventDefault()

        let inicioFerias = document.querySelector(".inputLabel #inicioFerias").value
        let fimFerias = document.querySelector(".inputLabel #fimFerias").value

        const feriasSolicitadas = new FeriasSolicitadas(inicioFerias, fimFerias)

        try {
            let estagiario = getEstagiarioFromSelect(select_)
            estagiario.solicitarFerias(feriasSolicitadas)
            editEstagiarioByIndex(getIndexFromSelect(select_), estagiario)
            abrirFormulario()
        } catch(error) {
            alert(error.message)
        }

    })

function init() {
    select_.innerHTML = criarOptions(getEstagiarios())
}

function abrirFormulario() {
    let tbody = document.querySelector("#tabelaFeriasSolicitadas tbody")
    tbody.innerHTML = ""

    let estagiario = getEstagiarioFromSelect(select_)
    feriasDisponiveis.innerHTML = estagiario.calcularFerias().feriasEmDias

    document.querySelector("#ferias")
        .classList.remove("invisible")


     estagiario.listaFeriasSolicitadas.forEach(feriasSolicitadas => {
        tbody.innerHTML = tbody.innerHTML + criarTr(feriasSolicitadas)
    })
}

function fecharFormulario() {
    document.querySelector("#ferias")
        .classList.add("invisible")
}

function criarTr(feriasSolicitadas) {
    return `
    <tr>
        <td scope="row">${feriasSolicitadas.inicioFerias}</td>
        <td>${feriasSolicitadas.fimFerias}</td>
        <td>${feriasSolicitadas.periodoEmDias}</td>
    </tr>
    `
}

init()