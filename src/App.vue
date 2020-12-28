<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div>
      Home
    </div>
    <div>Content</div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'
  import MyFooter from './components/MyFooter'

  export default {
    name: 'App',
    components: {
      NavBar,
      MyFooter
    }
  }
  </script>