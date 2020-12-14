<template>
  <thead>
    <tr>
      <th
        class="font-weight-bold title"
        v-for="item in headers"
        :key="item.name"
        scope="col"
      >{{item.text}}
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Image',
          value: 'image_url'
        },
        {
          text: 'Price',
          value: 'price'
        },
        {
          text: 'Stock',
          value: 'stock'
        },
        {
          text: 'Actions',
          value: 'actions'
        }
      ]
    }
  }
}
</script>

<style>

</style>
