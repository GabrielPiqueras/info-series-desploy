/* Función que convierte los milisegundos a formato minutos:segundos */
function convertMsToMm(ms) {
    const min = Math.floor(ms / 60000)
    const sec = Math.floor(ms % 60000 / 1000).toFixed(0) // toFixed(0) quita los decimales redondeando hacia arriba

    return `${min}:${sec}`
}

const msToMm = {}

/* Recibo la instancia de Vue por parámetro */
msToMm.install = function(Vue) {
    /* filter() me permite crear un filtro, recibe el nombre que tendrá el filtro y la función a ejecutar */

    /* Este filtro recibirá el valor inicial y devolverá el valor convertido */
    Vue.filter('ms-to-mm', (val) => {
        return convertMsToMm(val)
    })
}

export default msToMm