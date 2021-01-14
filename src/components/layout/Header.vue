<template lang="pug">
    section.hero.is-success
        .hero-head
            header.nav
                .container
                    .nav-left
                        .nav-item
                            strong Info Series
                            
                    //- Menu
                    nav.navbar(role='navigation' aria-label='main navigation')
                        .navbar-brand
                            a.navbar-burger(v-bind:class="{ 'is-active': menuHamburguesa }", @click="mostrarMenuHamburguesa" role='button' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample')
                                span(aria-hidden='true')
                                span(aria-hidden='true')
                                span(aria-hidden='true')
                        #navbarBasicExample.navbar-menu
                            .navbar-end
                            router-link.navbar-item(to="/") Buscar
                            router-link.navbar-item(to="about") Nosotros
        //- Portada (Hero)
        .hero-body
            .container.has-text-centered
                h1.title Info Series
                h2.subtitle Búsqueda e información sobre producciones.
                //- Reproductor
                pm-player
 
</template>

<script>

import PmPlayer from '@/components/Player.vue'

export default {
    data() {
        return {
            menuHamburguesa: false
        }
    },
    components: {
        PmPlayer
    },
    methods: {
        mostrarMenuHamburguesa() {
            if (this.menuHamburguesa) {
                this.menuHamburguesa = false;
            } else {
                this.menuHamburguesa = true;
            }
        }
    }
}
</script>