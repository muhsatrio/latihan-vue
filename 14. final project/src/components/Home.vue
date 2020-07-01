<template>
  <div>
      <h1>Trade or View your Portfolio</h1>
      <h6>You may save and load your data</h6>
      <h6>Click on 'End Buy' to begin a new buy</h6>
      <hr>
      <p>Your Fund: {{ funds }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  }
}
</script>

<style>

</style>