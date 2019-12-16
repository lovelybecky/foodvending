<template>
  <div id="app">
	<router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  created(){
    //this.$router.push('/')
  }
}
</script>

<style>
body{
	margin: 0;
	padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  text-align: center;
  color: #343A40;
}
</style>
