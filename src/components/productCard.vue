<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="product.image_url" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title"> {{product.name}} </h5>
      <p class="card-text">{{product.description}}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{product.price}}</li>
      <li class="list-group-item">{{product.stock}}</li>
    </ul>
    <div class="card-body">
      <button @click="changePage" class="btn btn-dark">Edit</button>
      <button @click="deleted" class="btn btn-dark">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productCard',
  props: ['product'],
  methods: {
    changePage () {
      this.$router.push(`/edit/${this.product.id}`)
    },
    editPage (id) {
      console.log(id, 'dari home')
      this.$store.dispatch('editData', id)
    },
    deleted () {
      const id = this.product.id
      this.$store.dispatch('deleted', id)
        .then(({ data }) => {
          this.$store.dispatch('fetchData')
        })
        .catch(({ err }) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
  .card {
    color: black;
    display: flexbox;
  }
  .btn {
    margin: 10px;
  }
</style>
