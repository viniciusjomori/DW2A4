import { editEstagiarioByIndex, getEstagiarioByIndex, getEstagiarios } from "../EstagiarioCRUD.js"
import { criarOptions, getEstagiarioFromSelect, getIndexFromSelect } from "../SelectEstagiario.js"

let select_ = document.querySelector("#estagiarios select")



select_
    .addEventListener("change", function() {
        definirAcaoDoBotao()
    })

document.querySelector("#btnDesligar")
    .addEventListener("click", function(e) {
        e.preventDefault()

        let index = getIndexFromSelect(select_)
        let estagiario = getEstagiarioByIndex(index)
        estagiario.desligar()

        editEstagiarioByIndex(
            index,
            estagiario
        )

        init()
    })

document.querySelector("#btnReativar")
    .addEventListener("click", function(e) {
        e.preventDefault()

        let index = getIndexFromSelect(select_)
        let estagiario = getEstagiarioByIndex(index)

        try {
            estagiario.reativar()
        } catch(e) {
            alert(e.message)
        }

        editEstagiarioByIndex(
            index,
            estagiario
        )

        init()
    })

function init() {
    select_.innerHTML = criarOptions(getEstagiarios())
    definirAcaoDoBotao()
}

function definirAcaoDoBotao() {
    let estagiario = getEstagiarioFromSelect(select_)

    if(estagiario.ativo)
        exibirBtnDesligar()
    else
        exibirBtnReativar()

}

function exibirBtnDesligar() {
    document.querySelector("#btnDesligar")
        .classList
        .remove("invisible")
    
    document.querySelector("#btnReativar")
        .classList
        .add("invisible")
}

function exibirBtnReativar() {
    document.querySelector("#btnReativar")
        .classList
        .remove("invisible")
    
    document.querySelector("#btnDesligar")
        .classList
        .add("invisible")
}


init()