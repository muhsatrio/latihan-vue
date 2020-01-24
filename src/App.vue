<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <Quote>
          <h2 slot="title">{{ quoteTittle }}</h2>
          <p>A wonderful Quote!</p>
        </Quote>
      </div>
    </div>
  </div> 
</template>

<script>
import Quote from './components/Quote'
export default {
  data() {
    return {
      quoteTittle :'The Quote'
    }
  },
  components: {
    Quote
  }
}
</script>

<style>

</style>
