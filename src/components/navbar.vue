<template>
  <div id="nav">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item p-0" href="#">
            <img src="../img/Mozpedia.png" width="150" height="100">
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a @click="addNew" class="button is-success is-light has-text-white has-text-success-dark">
                  <strong>Add New</strong>
                </a>
                <a @click="logout" class="button is-success has-text-white">
                  <strong>Logout</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    },
    addNew () {
      this.$router.push('/products')
    }
  }
}
</script>
