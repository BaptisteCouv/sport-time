<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js App"/>
    <div class="container-fluid">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
  #app {
    font-family: 'Source Sans Pro', sans-serif;
    text-align: center;
    color: #2c3e50;
    background-color: #f5f8fa;
    height: 100vh;
  }
</style>
