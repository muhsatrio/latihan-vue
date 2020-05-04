<template>
  <div>
      <Stock :key="stock.id" v-for="stock in stocks" :stock="stock"></Stock>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Stock from './Stock';
export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  },
  components: {
    Stock
  }
}
</script>

<style>

</style>