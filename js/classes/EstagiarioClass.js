import { calcularFerias as moduloCalcularFerias } from "../CalculadoraFerias.js";
import { getTodayDate, YYYY_MM_DD } from "../DateUtils.js";
import { FeriasSolicitadas } from "./FeriasSolicitadasClass.js";

export class Estagiario {

    constructor(nome, cpf, genero, endereco, dataNascimento, empresaNome, cargo, bolsaAuxilio, dataInicio, dataFim) {
        //dados pessoais
        this.nome = nome;
        this.cpf = cpf;
        this.genero = genero
        this.endereco = endereco;
        this.dataNascimento = YYYY_MM_DD(dataNascimento);

        //dados sobre o estagio
        this.empresaNome = empresaNome;
        this.cargo = cargo;
        this.bolsaAuxilio = bolsaAuxilio
        this.dataInicio = YYYY_MM_DD(dataInicio);
        this.dataFim = YYYY_MM_DD(dataFim);
        this.listaFeriasSolicitadas = [];
        
        this.desligamentoData = null
    }

    get ativo() {
        return new Date() < new Date(this.dataFim) && this.desligamentoData === null
    }

    get feriasSolicitadasTotal() {
        let total = 0;
        for(let ferias of this.listaFeriasSolicitadas) {
            total += ferias.periodoEmDias
        }

        return total
    }

    static fromJson(json) {
        let estagiario = new Estagiario(
            json.nome,
            json.cpf,
            json.genero,
            json.endereco,
            json.dataNascimento,
            json.empresaNome,
            json.cargo,
            json.bolsaAuxilio,
            json.dataInicio,
            json.dataFim
        );

        if(json.listaFeriasSolicitadas !== undefined)
            estagiario.listaFeriasSolicitadas = json.listaFeriasSolicitadas
                .map( ferias => {
                    return FeriasSolicitadas.fromJson(ferias)
                })
        
        if(json.desligamentoData !== undefined)
            estagiario.desligamentoData = json.desligamentoData

        return estagiario
    }

    solicitarFerias(feriasSolicitadas) {
        if(!(feriasSolicitadas instanceof FeriasSolicitadas)) {
            throw new Error("Objeto não é ferias")    
        }
        if(!feriasSolicitadas.feriasValidas()) {
            throw new Error("Valores invalidos")
        }
        if(this.calcularFerias().feriasEmDias < feriasSolicitadas.periodoEmDias) {
            throw new Error("Estagiário não possui ferias suficientes")
        }
        this.listaFeriasSolicitadas.push(feriasSolicitadas)
    }

    calcularFerias() {
        return moduloCalcularFerias(
            this.dataInicio,
            this.dataFim,
            this.feriasSolicitadasTotal,
            this.bolsaAuxilio
        )
    }

    desligar() {
        this.desligamentoData = getTodayDate()
    }

    reativar() {
        if(new Date() > new Date(this.dataFim)) {
            throw new Error("Estagio inativo")
        }
        this.desligamentoData = null
    }

}