<template>
  <div>
    <section class="section-home-page">
      <div class="container">
        <div class="row">
          <div class="col-10 col-sm-12">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://i.pinimg.com/564x/58/c6/75/58c67547f0370c108f6b7c8a464920e5.jpg" class="img-carousel img-fluid d-block" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="https://i.pinimg.com/564x/90/fc/ae/90fcae1e4a06625e92153a02f469c240.jpg" class="img-carousel img-fluid d-block" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="https://i.pinimg.com/564x/e4/08/b1/e408b1b3dd4cba7f31e07ea3e6fd035b.jpg" class="img-carousel img-fluid d-block" alt="...">
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <ProductCard class="mt-5 col-md-3 col-sm-6 g-4"
            v-for="product in products"
            :key="product.id"
            :product="product">
          </ProductCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
export default {
  name: 'HomePage',
  components: {
    ProductCard
  },
  data () {
    return {

    }
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetch')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>
  .container-img{
    padding-left: 80px;
  }
  .img-carousel{
    width: 100%;
    height: 600px;
  }
</style>
