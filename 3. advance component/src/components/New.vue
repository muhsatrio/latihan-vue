<template>
  <div>
    <h3>New Quote</h3>
    <p>{{ count }}</p>
    <button @click="count+=1">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
}
</script>

<style>

</style>