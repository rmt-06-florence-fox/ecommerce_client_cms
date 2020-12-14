<template>
  <div>
    <div class="card ml-5 mt-3" style="width: 14rem;" id="card">
      <img :src="product.imageUrl" class="card-img-top" style="width: 14rem; height: 12rem">
      <div class="card-body">
        <h5 class="card-title">name product {{ product.name }}</h5>
        <p class="card-text">price {{ product.price }}</p>
        <button class="btn-edit">edit</button>
        <button class="btn-delete" @click="deleteProduct">delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data () {
    return {
      id: this.product.id
    }
  },
  methods: {
    deleteProduct () {
      console.log(this.id, '<<<<<<< ini id delete product')
      this.$store.dispatch('deleteProduct', this.id)
        .then(({ data }) => {
          this.$router.push({ path: '/' })
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
  }
}
</script>

<style>
  #card {
    margin-bottom: 20px;
  }
  .btn-edit {
    width: 70px;
    border-radius: 10px;
    background-color: rgb(231, 226, 226);
    border: 1px solid #e5e5e5;
  }
  .btn-edit:hover {
    transition: 0.24s;
    border-radius: 10px;
    background-color: grey;
  }
  .btn-edit:focus {
    outline: none;
  }

  .btn-delete {
    margin-left: 10px;
    width: 70px;
    border-radius: 10px;
    background-color: rgb(226, 102, 102);
    border: 1px solid #e5e5e5;
  }
  .btn-delete:hover {
    transition: 0.24s;
    border-radius: 10px;
    background-color: rgb(228, 60, 60);
  }
  .btn-delete:focus {
    outline: none;
  }
</style>
