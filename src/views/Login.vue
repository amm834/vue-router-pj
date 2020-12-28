<template>
  <div class="container my-3">
    <div class="card p-2">
      <div class="alert alert-danger" v-if="message">
        {{message}}
      </div>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Username</label>
          <input type="text" class="form-control" id="exampleInputPassword1" v-model="name">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary float-end">Login</button>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data() {
      return {
        name: '',
        password: '',
        message: ''
      }
    },
    methods: {
      login() {
        if (this.name === 'amm' && this.password === '123') {
          localStorage.setItem('auth', true);
        this.$router.push('/profile')
        } else
          this.message = 'Fail To Login!';
      }
    }
  }
  </script>