import { microsecondsToDays } from "./DateUtils.js"

export function calcularFerias(dataInicio, dataFim, feriasSolicitadas, bolsaAuxilio) {

    dataInicio = new Date(dataInicio)

    dataFim = new Date(dataFim)
    
    if(dataFim > dataInicio) {
        let diferença = dataFim.getTime() - dataInicio.getTime()
        diferença = microsecondsToDays(diferença)
        
        let feriasEmDias = Math.floor((diferença / 30) * 2.5 - feriasSolicitadas)
        let feriasEmDinheiro = ((feriasEmDias/30)*bolsaAuxilio).toFixed(2)

        return {
            feriasEmDias,
            feriasEmDinheiro
        }
    } else
        alert("Erro ao inserir datas")
}