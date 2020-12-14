<template>
  <section>
    <Navbar />
    <div class="row no-gutters" style="margin-top: 3%">
      <navVertical />
      <div class="col-md-10" style="box-shadow: 0px 0px 10px;">
        <div class="alert alert-success card mb-3" style="width: 33rem; padding: 20px; box-shadow: 0px 0px 3px; margin-left: 32%; margin-top: 5%">
          <img :src="productById.image_url" class="card-img-top img-fluid" style="width: 500px; height: 350px">
          <div class="card-body text-start">
            <h6>id <span class="badge rounded-pill bg-secondary" style="margin-left: 10px;">p-{{ productById.id }}</span> <a style="margin-right: 96px;"></a> last update <span class="badge bg-primary" style="margin-left: 10px;">{{ productById.updatedAt }}</span></h6>
          </div>
          <form @submit.prevent="updateProduct()">
            <div class="form-floating mb-1">
              <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="productById.name">
              <label for="floatingInput">product name <span class="badge bg-warning text-dark" style="margin-left: 9px;">{{ productById.name }}</span></label>
            </div>
            <div class="form-floating mb-1">
              <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="productById.image_url">
              <label for="floatingInput">image_url <span class="badge bg-warning text-dark" style="margin-left: 45px;" id="over">{{ productById.image_url }}</span></label>
            </div>
            <div class="form-floating mb-1">
              <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="productById.price">
              <label for="floatingInput">price <span class="badge bg-success" style="margin-left: 73px;">Rp. {{ productById.price }}</span></label>
            </div>
            <div class="form-floating mb-1">
              <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="productById.stock">
              <label for="floatingInput">stock <span class="badge bg-info " style="margin-left: 70px;">{{ productById.stock }}</span></label>
            </div>
            <div class="form-group mt-2" style="margin-bottom: -15px">
                <p id="bt">
                  <button type="submit" class="btn btn-primary btn-sm p2" id="btn-signIn"><i class="fa fa-sign-in" aria-hidden="true"></i> save update</button>
                  <button type="reset" class="btn btn-warning btn-sm p2" id="btn-signIn" @click="goBackProduct()"><i class="fa fa-sign-in" aria-hidden="true"></i>cancel</button>
                </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '../components/Navbar'
import navVertical from '../components/navVertical'

export default {
  name: 'DetailProduct',
  data () {
    return {
      lengthUrl: null,
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  components: {
    Navbar,
    navVertical
  },
  methods: {
    fetchDetailById () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchDetailById', id)
    },
    updateProduct () {
      const payload = {
        id: this.$route.params.id,
        name: this.productById.name,
        image_url: this.productById.image_url,
        price: this.productById.price,
        stock: this.productById.stock
      }
      this.$store.dispatch('updateProduct', payload)
    },
    goBackProduct () {
      this.$router.push('/products')
    }
  },
  created () {
    this.fetchDetailById()
  },
  computed: {
    productById: {
      get () {
        return this.$store.state.product
      },
      set (newValue) {
        return newValue
      }
    }
  }
}
</script>

<style>
#over {
  white-space: nowrap;
  width: 320px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
