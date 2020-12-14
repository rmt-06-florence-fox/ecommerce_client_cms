<template>
  <section class="section">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-one-fifth has-text-left">
          <Menu/>
        </div>
        <div class="column">
          <router-view/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Menu from '../components/Menu.vue'

export default {
  name: 'Homepage',
  components: {
    Menu
  }
}
</script>

<style>

</style>
