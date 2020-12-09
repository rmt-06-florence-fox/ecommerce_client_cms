<template>
    <b-navbar sticky class="mt-0 bg-white">
      <b-navbar-brand>
        <img src="../assets/logo.png" alt="logo" height="100px" width="300px">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item > <button class="btn btn-success">Add Product</button> </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form class="mr-4">
            <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
          
          <b-nav-item> 
            <button class="btn btn-dark">Logout</button>
          </b-nav-item>

        </b-navbar-nav>
    
      </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>

b-navbar {
  background: black;
}

</style>