<template>
  <div class="container-fluid col-md-4 justify-content-center">
    <b-card class="mt-3 d-flex flex-column" header="LOGIN">
      <b-form @submit="login" @reset="cancel" v-if="show">
        <b-form-group
          class="text-left"
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="example@mail.com"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="text-left"
          id="input-group-2"
          label="Password:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            type="password"
            v-model="form.password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button class="m-1" type="submit" variant="primary">Login</b-button>
        <b-button class="m-1" type="reset" variant="danger">Cancel</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },

      show: true
    }
  },
  methods: {
    login (el) {
      el.preventDefault()
      console.log(this.form)
      localStorage.setItem('access_token', this.form.email)
      this.$router.push('/main')
    },
    cancel (el) {
      el.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''

      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
