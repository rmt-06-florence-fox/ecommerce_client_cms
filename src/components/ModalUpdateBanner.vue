<template>
  <div>
    <a class="btn btn-primary" v-b-modal="bannerId+''" @click="populate(bannerId)">Update</a>

    <div class="mt-3">
    </div>

    <b-modal
      :id="bannerId+''"
      ref="modal"
      title="Update Your Banner"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="titleState"
          label="Title"
          label-for="title-input"
          invalid-feedback="Title is required"
        >
          <b-form-input
            id="title-input"
            v-model="title"
            :state="titleState"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          :state="imageUrlState"
          label="imageUrl"
          label-for="imageUrl-input"
          invalid-feedback="Image Url is required"
        >
          <b-form-input
            id="imageUrl-input"
            v-model="imageUrl"
            :state="imageUrlState"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Status"
          label-for="status-input"
        >
           <div>
            <b-form-select
              v-model="selected"
              :options="options"
              class="mb-3"
              value-field="item"
              text-field="name"
              disabled-field="notEnabled"
            ></b-form-select>
          <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
        </div>
        </b-form-group>

      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ['bannerId'],
  data () {
    return {
      title: '',
      titleState: null,
      imageUrl: '',
      imageUrlState: null,
      selected: 'Active',
      options: [
        { item: 'Active', name: 'Active' },
        { item: 'Inactive', name: 'Inactive' }
      ],
      updateId: null
    }
  },
  methods: {
    fetchBannerById (id) {
      this.$store.dispatch('fetchBannerById', id)
    },
    checkFormValidity () {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      this.imageUrlState = valid
      this.priceState = valid
      this.stockState = valid
      return valid
    },
    resetModal () {
      this.name = ''
      this.nameState = null
      this.imageUrl = ''
      this.imageUrlState = null
      this.price = ''
      this.priceState = null
      this.stock = ''
      this.stockState = null
    },
    handleOk (bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit () {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      this.$store.dispatch('updateBanner', {
        id: this.updateId,
        title: this.title,
        imageUrl: this.imageUrl,
        status: this.selected
      })
        .then(_ => {
          // router.push({ name: 'Banner' })
          this.$store.dispatch('fetchBanners')
          // this.fetchBannerById()
        })
        .catch(err => {
          console.log(err)
        })
        .finally(_ => {
          this.$nextTick(() => {
            this.$bvModal.hide(this.bannerId + '')
          })
        })
      // Hide the modal manually
    },
    bannerById () {
      return this.$store.state.bannerById
    },
    populate (id) {
      this.$store.dispatch('fetchBannerById', id)
        .then(data => {
        //   console.log(data.data)
          const obj = data.data
          this.title = obj.title
          this.imageUrl = obj.imageUrl
          this.selected = obj.status
          this.updateId = obj.id
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
</style>
