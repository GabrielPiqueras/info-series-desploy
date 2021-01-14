<template lang="pug">
  
  main

    pm-notification(v-show="showNotification")
      p(slot="notif") No se encontraron resultados

    section.section
      transition(name="move")
        pm-loader(v-if="searchQuery.length >= 3" v-show="isLoading")

      nav.nav.has-shadow
        .container
          input.input.is-large(type="text" placeholder="Buscar series" ref="buscador" v-model="searchQuery" @keyup.enter="search")
          a.button.is-info.is-large.mt-4(v-on:click="search") Buscar
          a.button.is-danger.is-large.mt-4.ml-3(v-on:click="limpiar") &times;
          p 
            small(v-if="Object.keys(series).length != 0") {{ searchMessage }}
            
        .container.results(v-show="!isLoading")
          .columns.is-multiline
            .column.is-one-quarter(v-for="s in series")
              pm-serie(
                v-blur="s.rated"
                v-bind:serie="s"
                v-bind:class= "{ 'is-active': s === selectedSerie }"
                v-on:select="setSelectedSerie"
              )
              
</template>

<script>

// Servicios
import serieService from '@/services/serie.js'

// Componentes
import PmSerie from '@/components/Serie.vue'
import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      parametros: {
        order_by: 'title',
        order_by2: 'episodes',
        limit: 30,
      },
      series: [],
      selectedSerie: '',
      isLoading: false,
      showNotification: false
    }
  },
  components: {
    PmSerie,
    PmLoader,
    PmNotification
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.series.length}`;
    }
  },
  watch: {
    // searchQuery() {
    //   // Visualizo el loader
    //   this.isLoading = true;

    //   // Ejecuto la busqueda
    //   serieService.search(this.searchQuery, this.parametros).then(respuesta => {
    //       this.series = respuesta;
          
    //       // Oculto el loader
    //       this.isLoading = false;
    //   })
    // },
    showNotification() {
      if(this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 3000)
      }
    }
  },
  methods: {
    search() {
      // Visualizo el loader
      this.isLoading = true;

      // Ejecuto la busqueda llamando al método del servicio pasando el término y parámetros
      serieService.search(this.searchQuery, this.parametros).then(respuesta => {
        this.series = respuesta;
  
        // Oculto el loader
        this.isLoading = false;
      })
    },
    limpiar() {
      this.searchQuery = ''
      this.series = []
      this.$refs.buscador.focus()
    },
    setSelectedSerie(serie) {
      this.selectedSerie = serie;
    }
  },

  mounted() {
    this.$refs.buscador.focus()
  }
}
</script>

<style lang="scss">

body {
  height: 100%;
}

.is-active {
  border: 3px solid green;
}

// @media screen and (max-width: 480px) {

// }

// @media screen and (max-width: 768px) {

// }

// @media screen and (max-width: 1024px) {
  
// }

// @media screen and (max-width: 1407px) {
  
// }

</style>
