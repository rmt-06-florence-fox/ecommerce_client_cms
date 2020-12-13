<template>
  <tr>
      <th scope="row" width="40">{{ no+1 }}</th>
      <th style="width:100px;"><img :src="el.image_url" alt="404" width="100" height="100"></th>
      <th>{{ el.name }}</th>
      <th>{{ el.category }}</th>
      <th>{{ el.stock }}</th>
      <th>{{ el.price }}</th>
      <th><router-link :to="id">edit</router-link><button class="btn p-1 text-danger ml-1" @click="destroy">delete</button></th>
  </tr>
</template>

<script>
// "btn p-1 text-dark"
export default {
  props: ['el', 'no'],
  data () {
    return {
      id: `/edit/${this.el.id}`
    }
  },
  methods: {
    destroy () {
      const id = this.el.id
      this.$store.dispatch('deleteProduct', id)
    }
  }
}
</script>

<style>

</style>
