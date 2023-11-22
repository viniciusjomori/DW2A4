export function cleanForm(formulario) {
    let inputs = formulario.getElementsByTagName("input")

    for(let input_ of inputs) {
        input_.value = ""
    }
}

export function preencherForm(formulario, objeto) {
    let inputs = formulario.getElementsByTagName("input")

    for(let input_ of inputs) {
        input_.value = objeto[input_.name]
    }
}