/* Este archivo actuará como un emisor de eventos que vamos a poder utilizar entre todos
nuestros componentes, permitiendo así comunicar componentes a través de eventos sin importar
su relación que relacion tienen estos */

const eventBus = {}

/* Declararemos una función install, la cuál recibe la instancia de Vue por parámetro.
El framework usará esta función para declarar el objeto e inyectarlo en todos los componentes */
eventBus.install = function(Vue) {

    Vue.prototype.$bus = new Vue()
    /* Dentro de los prototype podemos agregar comportamiento a los objetos
    y extender comportamiento de otros objetos, agregamos al prototype de Vue un objeto llamado $bus
    el '$' es para indicar que es un plugin o que es algo nativo de Vue */

    /* Al igual que $set,$this o $emit lo tendremos disponible en todos los componentes de la instancia */

    /* Creamos una nueva instancia de Vue para poder usar en el mismo plugin otros como $emit o $this */
}

/* Y lo exportamos */
export default eventBus;
