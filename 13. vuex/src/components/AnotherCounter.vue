<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
        <hr>
        <button class="btn btn-primary" @click="asyncIncrement({
            by: 50,
            duration: 500
        })">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({
            by: 50,
            duration: 500
        })">Decrement</button>
    </div>
</template>

<script>
// import {mapMutations} from 'vuex';
import {mapActions} from 'vuex';
    export default {
        // methods: {
        //     increment() {
        //         this.$store.commit("increment");
        //     },
        //     decrement() {
        //         this.$store.commit("decrement");
        //     }
        // }

        // Mutations must range synchronously

        methods: {
            // ...mapMutations([
            //     'increment',
            //     'decrement'
            // ]),
            ...mapActions([
                'increment',
                'decrement',
                'asyncIncrement',
                'asyncDecrement'
            ]),
            increment(by) {
                this.$store.dispatch('increment', by);
            }
        },
    }
</script>