<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">Shop</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto  mb-lg-0 ">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/products">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/profile">Profile</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <a  @click="logout()" class="nav-link">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

</template>
<script>
  export default {
    name: 'NavBar',
    data() {
      return {
        message: 'Navbar'
      }
    },
    methods:{
      logout(){
        localStorage.removeItem('auth');
        this.$router.push('/login');
      }
    }
  }
  </script>