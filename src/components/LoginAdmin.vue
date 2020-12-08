<template>
  <div class="d-flex justify-content-center w-100 h-100" id="main">
    <div class="d-flex flex-column justify-content-center">
      <h3 class="mb-3">This is login page for admin</h3>
      <div id="form" class="p-sm-3 text-white font-weight-bolder">
        <b-form>
        <b-form-group label = "Email" label-for = "email">
          <b-form-input
            type = "email"
            name = "email"
            required
            placeholder="your email goes here"
          ></b-form-input>
        </b-form-group>

        <b-form-group label = "Password" label-for = "password">
          <b-form-input
            type = "password"
            name = "password"
            required
            placeholder = "your password goes here"
          ></b-form-input>
        </b-form-group>

        <b-button type = "submit" variant = "primary"> Login </b-button>
      </b-form>
      <div class="mt-3 text-dark">
        <p>Note : </p>
        <p>Only admins are able to login via this page</p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#form {
  background: rgba(60, 60, 60, 0.4);
}

#main {
  background :url(https://mcdn.wallpapersafari.com/medium/60/57/zD8SoR.jpg);
}

</style>
