<template>
  <div class="category-list">
      <ul><a @click="lemparCategoryName('all')">all</a></ul>
      <li v-for="(category,i) in getCategory" :key="i">
          <ul><a @click="lemparCategoryName(category.name)">{{category.name}} ({{category.Products.length}})</a></ul>
      </li>
  </div>
</template>

<script>
export default {
  name: 'categoryList',
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    lemparCategoryName (name) {
      console.log(name)
      this.$emit('lemparCategoryName', name)
    }
  },
  computed: {
    getCategory () {
      return this.$store.state.categories
    }
  }
}
</script>

<style scoped>
.category-list {
  text-align: left;
  margin-top: 1rem ;
}
.category-list li {
  margin-left: 0;
  list-style-type: none;
}
.category-list ul {
  margin-left: 1px;
  color: #24001e;
  cursor: pointer;
}
.category-list ul:hover {
  color: salmon;
}
</style>
