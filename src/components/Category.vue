<template>
  <li>- <a id="category" href="#" @click.prevent="chose">{{category.name}}</a></li>
</template>

<script>
export default {
  name: 'Category',
  methods: {
    chose () {
      this.$emit('chose', this.category)
      this.$emit('showProducts')
    }
  },
  props: ['category']
}
</script>

<style scoped>
a {
  font-size: 1em;
  font-weight: bold;
  color: #e58e26;
  text-decoration: none;
  color:white
}

a:hover {
  color: #f6b93b;
  transition: 300ms;
  text-decoration: none;
}
</style>
