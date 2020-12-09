<template>
  <aside class="menu">
    <p class="menu-label has-text-weight-bold is-size-7">
      General
    </p>
    <ul class="menu-list">
      <li><router-link to="/dashboard">Dashboard</router-link></li>
      <li><router-link to="/product">Add Product</router-link></li>
      <li><a @click.prevent="logout" href="">Logout</a></li>
    </ul>
    <p class="menu-label">
      Administration
    </p>
    <ul class="menu-list">
      <li><a>Team Settings</a></li>
      <li>
        <a class="is-active">Manage Your Team</a>
        <ul>
          <li><a>Members</a></li>
          <li><a>Plugins</a></li>
          <li><a>Add a member</a></li>
        </ul>
      </li>
      <li><a>Invitations</a></li>
      <li><a>Cloud Storage Environment Settings</a></li>
      <li><a>Authentication</a></li>
    </ul>
    <p class="menu-label">
      Transactions
    </p>
    <ul class="menu-list">
      <li><a>Payments</a></li>
      <li><a>Transfers</a></li>
      <li><a>Balance</a></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
  .menu {
    border-right: 2px solid green !important;
  }
</style>
