<template>
  <div class="container">
      <h1 class="text-center mb-4">New Banner</h1>
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Title"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.title"
            type="text"
            required
            placeholder="Enter banner title"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Status" label-for="input-3">
          <!-- <b-form-input
            type="number"
            id="input-3"
            v-model="form.status"
            required
            placeholder="Input status"
          ></b-form-input> -->
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

        <b-form-group id="input-group-2" label="Image URL" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.imageUrl"
            required
            placeholder="Enter image url"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger" class="ml-2">Reset</b-button>
      </b-form>
      <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      form: {
        title: '',
        imageUrl: ''
      },
      show: true,
      selected: 'Active',
      options: [
        { item: 'Active', name: 'Active' },
        { item: 'Inactive', name: 'Inactive' }
      ]
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      console.log(this.form.title, this.form.imageUrl, this.selected)
      this.$store.dispatch('createBanner', {
        title: this.form.title,
        imageUrl: this.form.imageUrl,
        status: this.selected
      })
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.title = ''
      this.form.imageUrl = ''
      this.form.status = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style>
</style>
