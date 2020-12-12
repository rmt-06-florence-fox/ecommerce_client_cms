<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-warning justify-content-between p-2 mb-5">
      <h3>Admin cms</h3>
      <button @click.passive="logout" class="btn btn-danger">logout</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$toasted.show('are you sure?', {
        action: [
          {
            text: 'yes',
            onClick: (e, toastObject) => {
              localStorage.clear()
              this.$router.push('/login')
            }
          },
          {
            text: 'no',
            onClick: (e, toastObject) => {
              toastObject.goAway(0)
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
