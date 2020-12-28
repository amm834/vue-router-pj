<template>
  <div class="container my-5">
    <div class="col">
      <div class="card h-100 p-3">
        <img :src="product.image" class="img-fluid">
        <div class="card-body">
          <h5 class="display-6 card-title">{{product.title}}</h5>
          <h5 class="text-center">{{product.price}}$</h5>
        </div>
        <div class="card-footer">
           <router-link class="btn btn-outline-secondary" to="/products">Back</router-link>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import axios from 'axios';
  export default {
    name: 'ProductDetail',
    data() {
      return {
        product: Object
      }
    },
    created() {
      axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
      .then(res=> {
        this.product = res.data;
      })
      .catch(err=> {
        console.log(err)
      })
    }
  }
  </script>