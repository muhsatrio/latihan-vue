<template>
  <div class="row">
    <Quote @click.native="quoteDeleted(index)" v-for="(quote, index) in quotes" :key="index">{{ quote }}</Quote>
  </div>
</template>

<script>
import Quote from './Quote'
export default {
  props: {
    quotes: Array,
    quoteDeleted: Function
  },
  components: {
    Quote
  },
}
</script>

<style>

</style>