<template>
  <div class="component">
      <h3>You may view the User Details here</h3>
      <p>Many Details</p>
      <p>Username: {{ myName }}</p>
      <p>User Age: {{ userAge }}</p>
      <p>Reversed: {{ switchName() }}</p>
      <button @click="resetFn">Reset Name</button>
  </div>
</template>

<script>
export default {
    props: {
        myName: {
            type: String,
            required: true
        },
        resetFn: Function,
        userAge: Number,
    },
    methods: {
        switchName() {
            return this.myName.split("").reverse().join("");
        },
    },
}

</script>

<style scoped>
    div.component {
        background-color: lightcoral;
    }
</style>