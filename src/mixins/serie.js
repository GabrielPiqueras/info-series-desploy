const serieMixin = {
    methods: {
        selectSerie() {
            if (this.serie.rated === 'R') { return }
            
            this.$emit('select', this.serie);
            
            /* Emitimos el evento 'set-serie' desde la nueva instancia de Vue dentro de $bus */
            /* Estaremos emitiendo con $emit un evento a nuestro plugin 'EventBus',
               El cual recibiremos con $on en el otro componente */
            this.$bus.$emit('set-serie', this.serie)
        }
    }
}

export default serieMixin