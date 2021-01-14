<template lang="pug">

  //- Si el objeto serie no está vacío, mostramos el contenido
  .content(v-if="Object.keys(serie).length != 0")

    p.is-128x128
        img(v-bind:src="serie.image_url")
    p
        strong {{ serie.title }}
        small {{ serie.sinopsis }}
    p
        a(v-bind:href="serie.url" target="_blank") Más información
    audio(controls)

</template>

<script>
export default {
    data() {
        return {
            serie: {}
        }
    },
    created() {
        this.$bus.$on('set-serie', (serie) => {
            this.serie = serie;
        })
    }
}
</script>

<style lang="scss">
    .content {
        img {
            object-fit: cover;
            border-radius: 50%;
            width: 15em;
            height: 15em;
        }
    }
</style>