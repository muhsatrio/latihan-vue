<template>
    <div id="serverStatus">
        <p>Server Status: {{ status }}</p>
        <hr>
        <button @click="changeStatus">Change</button>
    </div>
</template>

<script>
export default {
    name: 'serverStatus',
    data: () => {
        return {
            status: 'Critical!'
        }
    },
    methods: {
        changeStatus() {
            this.status = 'Normal';
        }
    }
}
</script>

<style>

</style>