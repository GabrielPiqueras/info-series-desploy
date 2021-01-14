<template lang="pug">

    .container
        .columns
            .column.is-3.has-text-centered
                figure.media-left
                    p.image
                        img(v-bind:src="serie.image_url")
                    p
                        a.button.is-primary.is-large
                            span.icon(@click="selectSerie") ▶
            .colum.is-8
                .panel
                    .panel-heading
                        h1.title {{ serie.title }}
                    .panel-block
                    article.media
                        .media-content
                            .content
                                ul(v-for="(value, key) in serie")
                                    li
                                        strong {{ key }}:&nbsp;
                                        span {{ value }}
                        nav.level
                            .level-left
                                a.level-item

        h1.title.is-2 {{ serie.title }}

    //- h1 Serie - Información

    //- h2 {{ serie.title }}
    //- img(v-bind:src="serie.image_url")
    //- p {{ serie.synopsis }}
</template>

<script>

import serieMixin from '@/mixins/serie.js'
import PmSerie from '@/components/Serie.vue'
import serieService from '@/services/serie.js'

export default {
    mixins: [ serieMixin ],
    data() {
        return {
            serie: {}
        }
    },

    created() {
        const id = this.$route.params.id;

        serieService.details(id).then(serie => {
            this.serie = serie;
        })
    }
}
</script>

<style lang="scss" scoped>
    main {
        margin: 2em
    }
    .card {
        width: 25%;
    }
</style>