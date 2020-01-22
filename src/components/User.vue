<template>
  <div class="component">
      <h1>The User Component</h1>
      <p>I'm an awesome User!</p>
      <hr>
      <div class="row">
          <div class="col-xs-12 col-sm-6">
              <UserDetail />
          </div>
          <div class="col-xs-12 col-sm-6">
              <UserEdit />
          </div>
      </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';
export default {
    components: {
        UserDetail,
        UserEdit
    }
}
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>