<template>
  <div id="quote">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <span style="color: #ccc">
        <slot name="content">The Subtitle</slot>
      </span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['quote'],
}
</script>

<style scoped>
  div#quote {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center; 
  }
  h2 {
    color: red;
  }
</style>