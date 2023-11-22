import * as EstagiarioCRUD from "./EstagiarioCRUD.js"

function criarOption(estagiario, i) {
    return `
        <option id='${i}'>
            [${i}] ${estagiario.nome}
        </option>
    `
}

export function criarOptions(estagiarios) {
    let options;
    estagiarios.forEach((estagiario, index) => {
        options = options + criarOption(estagiario, index)
    });
    return options
}

export function getIndexFromSelect(select) {
    let option = select.value;
    let index = parseInt(option.match(/\[(\d+)\]/)[1], 10);
    return index
}

export function getEstagiarioFromSelect(select) {
    let index = getIndexFromSelect(select)
    return EstagiarioCRUD.getEstagiarioByIndex(index)
}