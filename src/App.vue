<template lang="pug">
  
  #app
    pm-header
    router-view
    pm-footer
</template>

<script>

// Layout
import PmHeader from '@/components/layout/Header.vue'
import PmFooter from '@/components/layout/Footer.vue'

export default {
  name: 'app',

  components: {
    PmHeader, PmFooter
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

@media screen and (max-width: 480px) {

}

@media screen and (max-width: 768px) {

}

@media screen and (max-width: 1024px) {
  
}

@media screen and (max-width: 1407px) {
  
}

</style>
