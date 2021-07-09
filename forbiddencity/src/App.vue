<template>
  <div id="app">
    <login />
    <router-view/>
  </div>
</template>
<script>
import login from '../src/view/login/index.vue'
export default {
  name: 'App',
  components: {
    login
  }
}
</script>

<style>
</style>
