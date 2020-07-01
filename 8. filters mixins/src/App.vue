<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | textUpperCase | toLowerCase }}</p>
                <input type="text" v-model="filterText">
                <p v-for="(fruit,i) in filteredFruits" :key="i">{{ fruit }}</p>
                <hr>
                <List></List>
            </div>
        </div>
    </div>
</template>

<script>
    import List from "./List";
    import fruitMixins from './fruitMIxins';
    export default {
        mixins: [fruitMixins],
        data() {
            return {
                text: 'Asdasdasd',
                fruits: ['pepaya', 'mangga', 'jambu', 'pisang'],
                filterText: ''
            }
        },
        filters: {
            textUpperCase(value) {
                return value.toUpperCase();
            }
        },
        components: {
            List
        }
    }
</script>

<style>

</style>
