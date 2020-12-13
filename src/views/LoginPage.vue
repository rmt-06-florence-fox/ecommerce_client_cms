<template>
    <div>
        <div class="d-flex bg">
            <div class="mx-auto mt-1">
                <div class="shadow p-3 mb-5 bgS rounded mx-auto mt-4 color-page">
                    <div class="text-center">
                        <h2>BukaPalak</h2>
                    </div>
                    <form @submit.prevent="submitLogin">
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
import Swal from 'sweetalert2'

export default {
  name: 'FormLogin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitLogin () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
      //  ini Programatic
      //   this.$router.push('/mainpage') // ini cara pindah halaman
        .then(({ data }) => {
        //   console.log(data)
          localStorage.setItem('acces_token', data.acces_token)
          this.$router.push('/mainpage')
        //   commit('getAccesToken', data.acces_token) // showAll data ini nanti dipakai untuk nama function di mutations, parameter 2 data yang didapat dr server
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'wrong Email/Password',
            footer: 'Try Again'
          })
          // console.log('-0-0-0-')
        })
    }
  }
}
</script>

<style>

</style>
