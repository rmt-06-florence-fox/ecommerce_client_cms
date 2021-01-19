<template>
  <div>
    <br><br><br>
    <h1>List Category</h1>
    <button class="btn btn-primary btn-add p-1 mb-2" @click.prevent="addCategory">Add Category</button>
    <div class="container">
      <div class="row">
        <CategoryCard v-for="category in categories" :key="category.id" :category="category"></CategoryCard>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCard from '../components/CategoryCard.vue'

export default {
  name: 'Category',
  components: {
    CategoryCard
  },
  computed: {
    categories () {
      console.log('jalnnn')
      return this.$store.state.categories
    }
  },
  methods: {
    fetchCategory () {
      this.$store.dispatch('getCategory')
    },
    addCategory () {
      this.$router.push('/addCategory')
    }
  },
  created () {
    this.fetchCategory()
  }
}
</script>

<style>

</style>
