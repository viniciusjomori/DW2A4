import { Estagiario } from "../classes/EstagiarioClass.js";
import * as EstagiarioCRUD from "../EstagiarioCRUD.js"
import { cleanForm, preencherForm } from "../FormUtil.js"
import {criarOptions, getEstagiarioFromSelect, getIndexFromSelect} from "../SelectEstagiario.js"

let form_ = document.querySelector("form")

let selectEstagiarios = document.querySelector("#preencherEstagiarios select")

let btnCadastrar = document.querySelector("#btnCadastrarEstagiario")
let btnEditar = document.querySelector("#btnEditarEstagiario")

function init() {
    selectEstagiarios.innerHTML = criarOptions(EstagiarioCRUD.getEstagiarios())
    cleanForm(form_)
    registerMode()
}
init()



btnCadastrar.addEventListener("click", function(e) {
        e.preventDefault()

        let estagiario = getEstagiarioFromForm()

        EstagiarioCRUD.addEstagiario(estagiario)

        alert("Estagiario cadastrado com sucesso!")

        init()
    })

document.querySelector("#btnPreencherFormulario")
    .addEventListener("click", function(e) {
        e.preventDefault()

        let estagiario = getEstagiarioFromSelect(selectEstagiarios)

        preencherForm(
            form_,
            estagiario
        )

        editMode()
    })

btnEditar.addEventListener("click", function(e) {
        e.preventDefault()

        let estagiario = getEstagiarioFromForm()
        let index = getIndexFromSelect(selectEstagiarios)

        EstagiarioCRUD.editEstagiarioByIndex(index, estagiario)

        cleanForm(form_)
        init()
    })

document.querySelector("#btnCancelar")
    .addEventListener("click", function(e) {
        init()
    })

function registerMode() {
    btnEditar.classList.add("invisible")
    btnCadastrar.classList.remove("invisible")
}

function editMode() {
    btnEditar.classList.remove("invisible")
    btnCadastrar.classList.add("invisible")
}

function getEstagiarioFromForm() {
    const inputNome = document.querySelector('input[name="nome"]');
        const inputCPF = document.querySelector('input[name="cpf"]');
        const inputGenero = document.querySelector('input[name="genero"]');
        const inputEndereco = document.querySelector('input[name="endereco"]');
        const inputDataNascimento = document.querySelector('input[name="dataNascimento"]');
        const inputEmpresaNome = document.querySelector('input[name="empresaNome"]');
        const inputCargo = document.querySelector('input[name="cargo"]');
        const inputBolsaAuxilio = document.querySelector('input[name="bolsaAuxilio"]');
        const inputDataInicio = document.querySelector('input[name="dataInicio"]');
        const inputDataFim = document.querySelector('input[name="dataFim"]');

        const nome = inputNome.value;
        const cpf = inputCPF.value;
        const genero = inputGenero.value;
        const endereco = inputEndereco.value;
        const dataNascimento = inputDataNascimento.value;
        const empresaNome = inputEmpresaNome.value;
        const cargo = inputCargo.value;
        const bolsaAuxilio = inputBolsaAuxilio.value;
        const dataInicio = inputDataInicio.value;
        const dataFim = inputDataFim.value

        return new Estagiario(
            nome,
            cpf,
            genero,
            endereco,
            dataNascimento,
            empresaNome,
            cargo,
            bolsaAuxilio,
            dataInicio,
            dataFim
        );
}

