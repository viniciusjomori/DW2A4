import { calcularFerias } from "../CalculadoraFerias.js"
import { getTodayDate } from "../DateUtils.js"
import * as EstagiarioCRUD from "../EstagiarioCRUD.js"
import { preencherForm } from "../FormUtil.js"
import { criarOptions, getEstagiarioFromSelect } from "../SelectEstagiario.js"

const inputDataInicio = document.querySelector(".inputLabel #dataInicio")
const inputDataFim = document.querySelector(".inputLabel #dataFim")
const inputFeriasSolicitadas = document.querySelector(".inputLabel #feriasSolicitadasTotal")
const inputBolsaAuxilio = document.querySelector(".inputLabel #bolsaAuxilio")

document.querySelector("#btnCalcularFerias")
    .addEventListener("click", function(e) {
        e.preventDefault()

        const dataInicio = inputDataInicio.value
        const dataFim = inputDataFim.value
        const feriasSolicitadas = inputFeriasSolicitadas.value
        const bolsaAuxilio = inputBolsaAuxilio.value

        const ferias = calcularFerias(dataInicio, dataFim, feriasSolicitadas, bolsaAuxilio)

        document.querySelector("#resultadoEmDias .valor").innerHTML = ferias.feriasEmDias
        document.querySelector("#resultadoEmDinheiro .valor").innerHTML = "R$ "+ferias.feriasEmDinheiro
    })

let selectEstagiarios = document.querySelector("#estagiarios select")
selectEstagiarios.innerHTML = criarOptions(EstagiarioCRUD.getEstagiarios())

let form_ = document.querySelector("form")

document.querySelector("#btnPreencherFormulario")
    .addEventListener("click", function(e) {
        e.preventDefault()

        let estagiario = getEstagiarioFromSelect(selectEstagiarios)

        estagiario.dataFim = getTodayDate()

        preencherForm(
            form_,
            estagiario
        )
    })