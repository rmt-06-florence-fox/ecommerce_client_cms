<template>
<div>
  <NavBar> </NavBar>
        <router-view/>
</div>
</template>

<script>
import NavBar from '../components/Navbar'
export default {
  pageName: 'MainPage',
  components: { NavBar }
}
</script>

<style>

</style>
