<template>
  <section class="section">
    <h1 class="title">Dashboard</h1>
    <div class = "columns is-multiline">
      <div class="column is-one-quarter">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-5">Nama Product</p>
              </div>
            </div>

            <div class="content">
              <table class="table is-bordered is-hoverable is-narrow">
                <tbody class="is-size-6">
                  <tr>
                    <th>Price</th>
                    <td>1sjflksj</td>
                  </tr>
                  <tr>
                    <th>Stock</th>
                    <td>1sjflksj</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          <footer class="card-footer">
            <a @click.prevent="toggleModal" href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
          </footer>
        </div>
      </div>

      <div class="column is-one-quarter">
        <h1 class="title">Test</h1>
      </div>

      <div class="column is-one-quarter">
        <h1 class="title">Test</h1>
      </div>

      <div class="column is-one-quarter">
        <h1 class="title">Test</h1>
      </div>

      <div class="column is-one-quarter">
        <h1 class="title">Test</h1>
      </div>

      <div class="column is-one-quarter">
        <h1 class="title">Test</h1>
      </div>
    </div>
    <ModalEdit
      :isActive="isActive"
      @closeModal='toggleModal'
    />
  </section>
</template>

<script>
import ModalEdit from '../components/Edit'

export default {
  name: 'Dashboard',
  components: {
    ModalEdit
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleModal () {
      if (this.isActive) {
        this.isActive = false
      } else {
        this.isActive = true
      }
    }
  }
}
</script>

<style>

</style>
