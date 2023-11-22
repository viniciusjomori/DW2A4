import { Estagiario } from "./classes/EstagiarioClass.js";

function setEstagiarios(estagiarios) {
    localStorage.setItem("estagiarios", JSON.stringify(estagiarios))
}

export function addEstagiario(estagiario) {

    if(estagiario instanceof Estagiario) setEstagiarios([...getEstagiarios(), estagiario])
}

export function getEstagiarios() {
    let estagiarios = JSON.parse(localStorage.getItem("estagiarios"));

    if(estagiarios !== null) {
        estagiarios = estagiarios.map(estagiario => {
            return Estagiario.fromJson(estagiario)
        })
    }

    return estagiarios
}

export function getEstagiarioByIndex(index) {
    let estagiarios = getEstagiarios()

    return Estagiario.fromJson(estagiarios[index])
}

export function editEstagiarioByIndex(index, newEstagiario) {
    let estagiarios = getEstagiarios()

    estagiarios[index] = newEstagiario

    setEstagiarios(estagiarios)
}

export function getEstagiariosAtivos() {
    let estagiariosAtivos = []
    getEstagiarios().forEach((estagiario,index) => {
        if(estagiario.ativo) {
            estagiario.index = index
            estagiariosAtivos.push(estagiario)
        }
    })
    return estagiariosAtivos
}

if(!getEstagiarios() instanceof Array || getEstagiarios() === null) {
    let estagiarios = await fetch("../data.json")
        .then(data => data.json())
        .then(data => { 
            data = data.map(json => {
                return Estagiario.fromJson(json)
            })
            return data
         })

    setEstagiarios(estagiarios)
}