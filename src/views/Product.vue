<template>
  <div class="about">
    <div class="playlist">
      <h1>Products</h1>
      <div class="container">
        <div class="row">
          <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product">
          </ProductCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '../components/ProductCard.vue'
export default {
  name: 'Product',
  components: {
    ProductCard
  },
  data () {
    return {
      products: [
        {
          id: 1,
          name: 'Guns, Gems, and Steel',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/51c2SFXFpzL.jpg',
          stock: 10,
          price: 50000
        },
        {
          id: 2,
          name: 'Guns, Gems, and Steel 2',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/51c2SFXFpzL.jpg',
          stock: 10,
          price: 50000
        },
        {
          id: 3,
          name: 'Guns, Gems, and Steel 3',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/51c2SFXFpzL.jpg',
          stock: 10,
          price: 50000
        },
        {
          id: 4,
          name: 'Guns, Gems, and Steel 4',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/51c2SFXFpzL.jpg',
          stock: 10,
          price: 50000
        },
        {
          id: 5,
          name: 'Guns, Gems, and Steel 4',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/51c2SFXFpzL.jpg',
          stock: 10,
          price: 50000
        }
      ]
    }
  }
}
</script>
