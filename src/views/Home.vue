<template>
  <div>
    <h1>List Product</h1>
    <button class="btn btn-primary btn-add p-1 mb-2" @click.prevent="addProduct">Add Product</button>
    <div class="container">
      <div class="row">
        <div class="card col-md-4">
          <div class="m-1 p-0">
            <img src="https://cf.shopee.co.id/file/93dd62a2a5d9c52df6b3712496bd646e" class="card-img-top" alt="Bayam">
            <div class="card-body">
              <h5 class="card-title">Bayam</h5>
              <p class="card-text">Harga: 5000 / ikat</p>
              <a href="#" class="btn btn-primary mr-1">Edit</a>
              <a href="#" class="btn btn-danger ml-1">Delete</a>
            </div>
          </div>
        </div>
        <div class="card col-md-4">
          <div class="m-1 p-0">
            <img src="https://cf.shopee.co.id/file/93dd62a2a5d9c52df6b3712496bd646e" class="card-img-top" alt="Bayam">
            <div class="card-body">
              <h5 class="card-title">Bayam</h5>
              <p class="card-text">Harga: 5000 / ikat</p>
              <a href="#" class="btn btn-primary mr-1">Edit</a>
              <a href="#" class="btn btn-danger ml-1">Delete</a>
            </div>
          </div>
        </div>
        <div class="card col-md-4">
          <div class="m-1 p-0">
            <img src="https://cf.shopee.co.id/file/93dd62a2a5d9c52df6b3712496bd646e" class="card-img-top" alt="Bayam">
            <div class="card-body">
              <h5 class="card-title">Bayam</h5>
              <p class="card-text">Harga: 5000 / ikat</p>
              <a href="#" class="btn btn-primary mr-1">Edit</a>
              <a href="#" class="btn btn-danger ml-1">Delete</a>
            </div>
          </div>
        </div>
        <div class="card col-md-4">
          <div class="m-1 p-0">
            <img src="https://cf.shopee.co.id/file/93dd62a2a5d9c52df6b3712496bd646e" class="card-img-top" alt="Bayam">
            <div class="card-body">
              <h5 class="card-title">Bayam</h5>
              <p class="card-text">Harga: 5000 / ikat</p>
              <a href="#" class="btn btn-primary mr-1">Edit</a>
              <a href="#" class="btn btn-danger ml-1">Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    addProduct () {
      this.$router.push('/addProduct')
    }
  }
}
</script>
