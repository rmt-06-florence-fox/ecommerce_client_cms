<template>
    <div id="nav">
          <nav class="navbar navbar-expand-lg navbar-light bg-dark pt-3 pb-3 ">
            <router-link class="navbar-brand" to="/"> Home</router-link><br>
            <router-link to="/login" class="float-right">Logout</router-link>
          </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>
