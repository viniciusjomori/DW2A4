import { diferencaDeDias, YYYY_MM_DD } from "../DateUtils.js"

export class FeriasSolicitadas {
    constructor(inicioFerias, fimFerias) {
        this.inicioFerias = YYYY_MM_DD(inicioFerias)
        this.fimFerias = YYYY_MM_DD(fimFerias)
    }

    static fromJson(json) {
        return new FeriasSolicitadas(
            json.inicioFerias,
            json.fimFerias
        )
    }

    feriasValidas() {
        return this.inicioFerias < this.fimFerias
    }

    get periodoEmDias() {
        return diferencaDeDias(this.inicioFerias, this.fimFerias)
    }
}