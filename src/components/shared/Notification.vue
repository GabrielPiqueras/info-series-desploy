<template lang="pug">
    .container
     .columns
      .column.is-5.is-offset-4
       .notification.is-danger
        slot(name="notif") Algo anduvo mal
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .notification {
        margin: 10px;
    }
</style>