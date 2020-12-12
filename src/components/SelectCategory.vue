<template>
  <option :value="category.id">{{ category.category }}</option>
</template>

<script>
export default {
  name: 'SelectCategory',
  props: ['category']
}
</script>

<style>

</style>
