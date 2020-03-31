<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'Testing123'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-highlight:background.delayed="'red'">Color This</p>
                <p v-local-highlight:background.delayed="'red'">Color This</p>
            </div>
        </div>
        <div class="row">
            <button class="btn btn-danger" v-my-on:click="'halo'">Klik</button>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            "local-highlight": {
                bind(el, binding) {
                    let delay = 0;
                    if (binding.modifiers['delayed']) {
                      delay = 3000;
                    }
                    setTimeout(() => {
                      if (binding.arg === 'background') {
                        el.style.backgroundColor = binding.value;
                      }
                      else {
                        el.style.color = binding.value;
                      }
                    }, delay);
                }
            },
            'my-on': {
                bind(el, binding) {
                    el.addEventListener(binding.arg, () => {
                        alert(binding.value);
                    });
                }
            }
        }
    }
</script>

<style>

</style>
