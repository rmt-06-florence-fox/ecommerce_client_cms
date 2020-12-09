<template>
  <div class="column is-one-quarter">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="product.imageUrl" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-5">{{product.name}}</p>
          </div>
        </div>

        <div class="content">
          <table class="table is-bordered is-hoverable is-narrow">
            <tbody class="is-size-6">
              <tr>
                <th>Price</th>
                <td>{{product.price}}</td>
              </tr>
              <tr>
                <th>Stock</th>
                <td>{{product.stock}}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      <footer class="card-footer">
        <a @click.prevent="toggleModal(product.id)" href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item" @click.prevent="destroy(product.id)">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: [
    'product'
  ],
  methods: {
    toggleModal (id) {
      this.$emit('toggleModal', id)
    },
    destroy (id) {
      this.$emit('destroy', id)
    }
  }
}
</script>

<style>

</style>
