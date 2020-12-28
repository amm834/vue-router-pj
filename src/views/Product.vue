<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="product in products" :key="product.id">
        <div class="card h-100 p-3">
          <img :src="product.image" class="img-fluid">
          <div class="card-body">
            <h5 class="display-6 card-title">{{product.title}}</h5>
            <h5 class="text-center">{{product.price}}$</h5>
          </div>
          <div>
            <div class="d-grid gap-2 d-md-block">
              <router-link :to="`/product/${product.id}`" class="btn btn-primary" type="button">Show Detail</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'Product',
    data() {
      return {
        products: Object
      }
    },
    created() {
      axios.get('https://fakestoreapi.com/products')
      .then(res=> {
        this.products = res.data;
      })
      .catch(err=> {
        console.log(err)
      })
    }
  }
  </script>