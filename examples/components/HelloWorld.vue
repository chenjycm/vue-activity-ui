<template>
  <div class="hello">
      <act-marquee></act-marquee>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  height: 100%;
  position: relative;
}
</style>
