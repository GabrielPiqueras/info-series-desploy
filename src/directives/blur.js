const blur = {}

/* Esta directiva desenfocará una imagen (efecto blur) */

/* Las directivas tienen diferentes etapas, una de ellas se llama 'bind' que es similar al Hoock 'mounted' de un componente
   Luego tenemos la etapa 'update' que sería igual al Hoock 'update' de un componente, hay más Hoocks para directivas */

/* Cada uno de estos Hoocks viene con 4 atributos:
    1) el(elemento html)
    2) binding(Tiene información del valor que se pasa a la directiva)
    3) Es una referencia al nodo del virtual DOM
    4) Otra rferencia al nodo anterior del virtual DOM (antes de ser modificado por la directiva) */

/* Nuestra función, en base a un parámetro ver si es true o false para aplicar el efecto o no */
function setBlur(el, binding) {

    // Acedo a la propiedad style del elemento y si el valor que recibe la directiva es igual a 'R' (+18), aplico el efecto blur (es un método de css), si es verdadero aplico 'none'
    el.style.filter = binding.value == 'R' ? 'blur(3px)' : 'none'
    // También ponemos el cursor en 'not-allowed', si fuera  true 'inherit' que hereda del elemento padre 
    el.style.cursor = !binding.value == 'R' ? 'not-allowed' : 'inherit'

    // Dentro de ese elemento, recorremos todos los botones, si la directiva recibe el valor 'R' (+18) deshablitaremos dicho enlace 
    el.querySelectorAll('button').forEach(button => {
        if (binding.value === 'R') {
            button.setAttribute('disabled', true)
        } else {
            button.removeAttribute('disabled')
        }
    })
}

blur.install = function(Vue) {
    /* Para usarlo a nivel global, es igual a los filtros, recibe el nombre de la directiva y en vez de una función, recibe un objeto para configurar dicha directiva */ 
    Vue.directive('blur', {
        /* Este objeto puede contener los Hooks (estados) de la directiva
           y se escriben como funciones al igual que en los componentes */

        /* bind() es cuando se enlaza la directiva, podríamos haber programado aquí el efecto blur pero en una función se hace más cómodo */

        bind (el, binding) {
            setBlur(el, binding)
        }
    })
}

// Exportamos la directiva
export default blur 