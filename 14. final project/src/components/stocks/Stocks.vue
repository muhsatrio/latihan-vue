<template>
  <div class="d-flex align-content-start flex-wrap">
      <stock :key="stock.id" v-for="stock in stocks" :stock="stock"></stock>
  </div>
</template>

<script>
import Stock from './Stock';
export default {
  components: {
    Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  },
}
</script>

<style>

</style>