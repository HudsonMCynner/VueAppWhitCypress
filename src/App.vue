<template>
  <div id="app">
    <input class="hello-world">
    <button @click="hello">Clique aqui</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  methods: {
    hello(){
      console.log('~> Falows')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
