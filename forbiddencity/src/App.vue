<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  },
  mounted(){
    this.$router.push({
      path:'login'
    })
  }
}
</script>

<style>
</style>
