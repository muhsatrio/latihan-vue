<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-grou">
                    <label for="">Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-grou">
                    <label for="">Mail Address</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <hr>
                <input type="text" class="form-control" v-model="node">
                <br><br>
                <button @click="submit" class="btn btn-primary">Submit</button>
                <br><br>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <div class="list-group">
                    <li :key="i" class="list-group-item" v-for="(u, i) in users">{{ u.username }} - {{ u.email }}</li>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: [],
                resource: {},
                node: 'data'
            }
        },
        methods: {
            submit() {
                // // eslint-disable-next-line no-console
                // console.log(this.user);
                // this.$http.post('data.json', this.user)
                //     .then(response => {
                //         // eslint-disable-next-line no-console
                //         console.log(response);
                //     }, error => {
                //         // eslint-disable-next-line no-console
                //         console.log(error);
                //     })
                // this.resource.save({}, this.user);
                this.resource.saveAlt(this.user);
            },
            fetchData() {
                // this.$http.get('data.json')
                //     .then(response => {
                //         return response.json();
                //     })
                //     .then(response => {
                //         // eslint-disable-next-line no-console
                //         console.log(response);
                //         let resultArray = [];
                //         for (let i in response) {
                //             resultArray = [...resultArray, response[i]];
                //         }
                //         // eslint-disable-next-line no-console
                //         console.log(resultArray);
                //         this.users = resultArray;
                //     }, error => {
                //         // eslint-disable-next-line no-console
                //         console.log(error);
                //     })
                this.resource.getData({
                    node: this.node
                })
                    .then(response => {
                        return response.json();
                    })
                    .then(response => {
                        // eslint-disable-next-line no-console
                        console.log(response);
                        let resultArray = [];
                        for (let i in response) {
                            resultArray = [...resultArray, response[i]];
                        }
                        // eslint-disable-next-line no-console
                        console.log(resultArray);
                        this.users = resultArray;
                    });
            }
        },
        created() {
            const customActions = {
                saveAlt: {
                    method: 'POST',
                    url: 'alternative.json'
                },
                getData: {
                    method: 'GET'
                }
            };
            this.resource = this.$resource('{node}.json', {}, customActions);
        },
    }
</script>

<style>
</style>
