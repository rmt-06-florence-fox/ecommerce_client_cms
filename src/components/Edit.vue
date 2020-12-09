<template>
  <div class="modal" :class="{'is-active':isActive}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit Product</p>
        <button @click.prevent="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->

        <form action="" @submit.prevent='addProduct'>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Name</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded">
                  <input v-model="productName" class="input" type="text" placeholder="Product Name">
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Image Url</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded">
                  <input v-model="imageUrl" class="input" type="text" placeholder="Link Image">
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Price</label>
            </div>
            <div class="field-body">
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-static">Rp</a>
                </p>
                <p  class="control">
                  <input v-model="productPrice" class="input" type="number" placeholder="Product Price">
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Stock</label>
            </div>
            <div class="field-body">
              <div class="field has-addons">
                <p  class="control">
                  <input v-model="productStock" class="input" type="number" placeholder="Product Stock">
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <!-- Left empty for spacing -->
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <button class="button is-primary">
                    Edit Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalEdit',
  data () {
    return {
      productPrice: '',
      imageUrl: '',
      productName: '',
      productStock: ''

    }
  },
  props: [
    'isActive'
  ],
  methods: {
    closeModal () {
      this.$emit('closeModal')
    }
  }
}
</script>

<style>

</style>
