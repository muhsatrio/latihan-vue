<template>
  <div class="component">
      <h1>The User Component</h1>
      <p>I'm an awesome User!</p>
      <button @click="changeName">Change Name</button>
      <hr>
      <div class="row">
          <div class="col-xs-12 col-sm-6">
              <UserDetail :myName="name" :resetFn="resetName" :userAge="age" />
          </div>
          <div class="col-xs-12 col-sm-6">
              <UserEdit :userAge="age" />
          </div>
      </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';
export default {
    data() {
        return {
            name: 'Satrio',
            age: 27
        }
    },
    methods: {
        changeName() {
            // eslint-disable-next-line no-console
            this.name = 'Wicaksono'
        },
        resetName() {
            this.name = 'Sat'
        }
    },
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