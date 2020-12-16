<template>
  <!-- Material form login -->
  <div class="container col-sm-3">
    <h3 class= "text-center">Muchsin Store</h3>
    <hr/>
    <form @submit.prevent="login">
      <p class="h4 text-center mb-4">Please Log in</p>
      <div class="grey-text text-left">
        <mdb-input
          label="Your email"
          icon="envelope"
          type="email"
          v-model="form.email"
          required
        />
        <mdb-input
          label="Your password"
          icon="lock"
          type="password"
          v-model="form.password"
          required
        />
      </div>
      <div class="text-center">
        <mdb-btn type="submit">Login</mdb-btn>
      </div>
    </form>
    <!-- Material form login -->
  </div>
</template>

<script>
import { mdbInput, mdbBtn } from 'mdbvue'
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
    login () {
      this.$store.dispatch('login', this.form)
    },
    cancel () {
      // Reset our form values
      this.form.email = ''
      this.form.password = ''

      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  components: {
    mdbInput,
    mdbBtn
  }
}
</script>
