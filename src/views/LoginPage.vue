<template>
    <div>
         <router-view/>
        <Header></Header>
        <Navbar></Navbar>
        <div class="d-flex bg">
            <div class="mx-auto mt-3">
                <div class="shadow p-3 mb-5 bgS rounded mx-auto mt-4 color-page">
                    <div class="text-center">
                        <h2>E-commerace</h2>
                    </div>
                    <form @submit.prevent="login">
                        <div class="form-group row">
                            <div class="mx-auto mt-2">
                                <label for="emailLogIn" class="col-sm-2 col-form-label">Email:</label> <br>
                            </div>
                            <div class="col-sm-10 mx-auto">
                                <input v-model="email" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="mx-auto mt-2">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">Password:</label>
                            </div>
                            <div class="col-sm-10 mx-auto">
                                <input v-model="password" type="password" class="form-control">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="mx-auto mt-3">
                                <button type="submit" class="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Header from '../components/Header'

export default {
  name: 'FormLogin',
  components: {
    Navbar,
    Header
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    //   this.$router.push('/home') // ini cara pindah halaman
    }
  }
}
</script>

<style>

</style>
