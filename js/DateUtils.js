export function microsecondsToDays(microseconds) {
    return microseconds / (1000*60*60*24)
}

export function getTodayDate() {
    return new Date().toISOString().split('T')[0]
}

export function YYYY_MM_DD(date) {
    return new Date(date).toISOString().split('T')[0]
}

export function diferencaDeDias(date1, date2) {
    date1 = new Date(date1)
    date2 = new Date(date2)

    let dias1 = microsecondsToDays(date1.getTime())
    let dias2 = microsecondsToDays(date2.getTime())

    return dias2 - dias1
}