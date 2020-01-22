<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <User />
      </div>
    </div>
  </div> 
</template>

<script>
import User from './components/User';
export default {
    components: {
      User
    }
}

// import Home from './components/Home';
// export default {
//   components: {
//     Home
//   }
// }
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'app',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style>
div.component {
        border: 1px solid black;
        padding: 30px;
}
</style>
