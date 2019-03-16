<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    <h2>Essential Links</h2>
    <ul>
      <li>Core Docs</li>
    </ul>
    <h2>Ecosystem</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .hello {
    color: black;
    font-size: 0.45rem;
    h2 {
      color: blue;
    }
  }
</style>
