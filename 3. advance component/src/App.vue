<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'Quote'">Quote</button>
        <button @click="selectedComponent = 'Author'">Author</button>
        <button @click="selectedComponent = 'New'">New</button>
        <hr>
        <keep-alive>
          <component :is="selectedComponent"></component>
        </keep-alive>
        <!-- <Quote>
          <h2 slot="title">{{ quoteTittle }}</h2>
          <p>A wonderful Quote!</p>
        </Quote> -->
      </div>
    </div>
  </div> 
</template>

<script>
import Quote from './components/Quote'
import Author from './components/Author'
import New from './components/New'
export default {
  data() {
    return {
      quoteTittle :'The Quote',
      selectedComponent: 'Quote'
    }
  },
  components: {
    Quote,
    Author,
    New
  }
}
</script>

<style>

</style>
