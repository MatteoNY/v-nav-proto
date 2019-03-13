<template>
  <div id="app">
    <Carousel />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
 

export default {
  name: 'app',
  components: {
    Carousel
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
