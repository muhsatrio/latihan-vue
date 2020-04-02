<template>
    <div>
        <h1>Filters & Mixins</h1>
        <input type="text" v-model="filterText">
        <p v-for="(fruit,i) in filteredFruits" :key="i">{{ fruit }}</p>
    </div>
</template>

<script>
    import fruitMixins from './fruitMIxins'
    export default {
        mixins: [fruitMixins]
    }
</script>

<style>

</style>
