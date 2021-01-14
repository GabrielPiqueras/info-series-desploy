/* Función que convierte dólares en euros */
function valorEuros(precio) {
    return `${precio * 0.81}€`
}

const convertDolarEuros = {}

/* Recibo la instancia de Vue por parámetro */
convertDolarEuros.install = function(Vue) {
    /* filter() me permite crear un filtro, recibe el nombre que tendrá el filtro y la función a ejecutar */
    /* Este filtro recibirá el valor en dólares y lo devolverá en Euros */
    Vue.filter('dolar-a-euros', (precio) => {
        return valorEuros(precio)
    })
}

/* Lo exportamos */
export default convertDolarEuros