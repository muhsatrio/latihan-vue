<template>
  <div class="container">
    <Header :quoteCount="quotes.length" :maxQuotes="maxQuotes" />
    <NewQuote @quoteAdded="newQuote" />
    <QuoteGrid :quoteDeleted="deleteQuote" :quotes="quotes" />
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Info: Click on a Quote to Delete it!
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
import QuoteGrid from './components/QuoteGrid'
import NewQuote from './components/NewQuote'
import Header from './components/Header'
export default {
  data() {
    return {
      quotes: [
        'Mak makan maaakkk'
      ],
      maxQuotes: 10
    }
  },
  components: {
    QuoteGrid,
    NewQuote,
    Header
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length>=this.maxQuotes) {
        alert('Maximum quotes is 10, you should delete quotes below first.')
      }
      else {
        this.quotes.push(quote)
      }
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1)
    },
  },
}
</script>

<style>

</style>
