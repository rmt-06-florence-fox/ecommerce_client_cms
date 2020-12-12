<template>
  <div id="editform" class="container-fluid">
    <section style="height: 100vh;">
    <div class="d-flex justify-content-center align-items-center" style="height: 100%;">
      <div class="p-5 bg-light shadow" style="width: 30%; border-radius: 10px;">
        <EditForm/>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import EditForm from '@/components/EditForm.vue'
export default {
  name: 'EditProduct',
  components: {
    EditForm
  }
}
</script>

<style>

</style>
