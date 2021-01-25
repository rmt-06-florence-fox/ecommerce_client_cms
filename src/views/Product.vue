<template>
    <div>
        <div>
            <a href="" @click.prevent="AddForm">ADD PRODUCT</a>
        </div>
        <div id="product">
            <div class="card shadow rounded" style="width: 18rem;" v-for="(item, index) in fetchData" :key="index">
                <img :src="item.image_url" class="card-img-top" alt="item.name">
                <div class="card-body">
                    <h5 class="card-title">{{item.name}}</h5>
                </div>
                <div class="card-body">
                    <a href="#" @click.prevent="toUpdatePage(item.id)" class="card-link">Edit</a>
                    <a href="#" @click.prevent="deleteProduct(item.id)" class="card-link">Delete</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Product',
  computed: {
    fetchData () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchAllData () {
      this.$store.dispatch('fetchData')
    },
    AddForm () {
      this.$router.push('/main-page/addform')
    },
    deleteProduct (id) {
    //   console.log(id)
      this.$store.dispatch('deleteProduct', id)
    },
    toUpdatePage (id) {
      this.$store.dispatch('toUpdatePage', id)
    }
  },
  created () {
    this.fetchAllData()
  }
}
</script>

<style>
#product {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: fle;
}

.card {
    margin-left: 20px;
    margin-top: 20px;
}

.card img {
    width: 100%;
}

</style>
