<template>
  <option v-if="category.id === CategoryId" :value="category.id" selected>{{ category.name }}</option>
  <option v-else :value="category.id">{{ category.name }}</option>
</template>

<script>
export default {
  name: 'EditOptionValue',
  props: ['category', 'CategoryId']
}
</script>

<style>
</style>
