<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link 
            tag="button" 
            class="btn btn-primary" 
            :to="{
                name: 'userEdit',
                params: {
                    id: $route.params.id
                },
                query: {
                    locale: 'em',
                    q: 100
                },
                hash: '#data'
            }"
            >
        Edit User</router-link>
    </div>
</template>


<script>
export default {
    beforeRouteEnter (to, from, next) {
        // eslint-disable-next-line no-constant-condition
        if (true) {
            next();
        }
        else {
            next(false);
        }
    }
}
// :to="'/user/' + $route.params.id + '/edit'"
</script>