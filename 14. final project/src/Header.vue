<template>
  <div>
      <ul class="nav nav-pills">
        <li class="nav-item" role="presentation"><router-link to="/" class="nav-link">Home</router-link></li>
        <li class="nav-item" role="presentation"><router-link to="/portfolio" class="nav-link">Portfolio</router-link></li>
        <li class="nav-item" role="presentation"><router-link to="/stocks" class="nav-link">Stocks</router-link></li>
        <li class="nav-item" role="presentation"><a href="#" @click="endDay" class="nav-link">End Day</a></li>
        <li class="nav-item" role="presentation"><router-link to="/stocks" class="nav-link">Save Data</router-link></li>
        <li class="nav-item" role="presentation"><router-link to="/stocks" class="nav-link">Load Data</router-link></li>
        <li class="nav-item" role="presentation">Funds: {{ funds }}</li>
    </ul>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  methods: {
    ...mapActions([
      'randomizeStocks'
    ]),
    endDay() {
      // eslint-disable-next-line no-console
      console.log('test');
      this.randomizeStocks();
    }  
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
}
</script>

<style>

</style>