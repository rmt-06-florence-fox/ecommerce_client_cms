<template>
  <div class="home">
    <Navbar/>
    <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/822/4281206822_be209932-fad6-4caa-8203-807240681ada.png?cb=1607775908" style="margin-top: 70px;">
    <ProductCard/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    ProductCard
  }
}
</script>
