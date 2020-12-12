<template>
  <div>
    <div class="nav-client">
      <router-link to="/products">Dashboard</router-link> |
      <router-link to="/create">Create Product</router-link> |
      <a @click.prevent='logout' href="#">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarDashboard',
  methods: {
    logout () {
      this.$toasted.error('Are you sure ?', {
        position: 'top-center',
        action: [
          {
            text: 'Yes',
            onClick: (e, toastedObject) => {
              toastedObject.goAway(0)
              localStorage.removeItem('access_token')
              this.$router.push('/')
              this.$toasted.success('Bye miminnn !!!', {
                position: 'top-center'
              })
            }
          },
          {
            text: 'No',
            onClick: (e, toastedObject) => {
              toastedObject.goAway(0)
            }
          }
        ]
      })
    }
  }
}
</script>

<style>

</style>
