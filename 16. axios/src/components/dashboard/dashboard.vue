<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your mail address: {{ email }}</p>
  </div>
</template>
<script>
import axios from '../../axios-auth'
export default {
  data() {
    return {
      email: '',
    }
  },
  created() {
    axios.get('/users.json')
      .then(res => {
        // eslint-disable-next-line no-console
        console.log(res);
        const data = res.data;
        let users = [];
        for (let key in data) {
          const user = data[key];
          user.id = key;
          // eslint-disable-next-line no-console
          console.log(user)
          users.push(user);
        }
        // eslint-disable-next-line no-console
        // console.log(users);
        this.email = users[0].email;
        // this.email = res.data[0].email;
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
  },
}
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>