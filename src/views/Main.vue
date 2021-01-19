<template>
  <div class="home">
    <div class="main-web">
      <div v-if="navOpen" class="main-nav col-1.5">
        <h3><a href="#" class="fa fa-area-chart" style='font-size:24px' @click.prevent="resetCategory"> Dashboard</a></h3>
          <h3><b class='fas fa-building' style='font-size:24px'> Categories : </b></h3>
          <ul class="overflow-auto">
            <Category
              v-for="category in categories"
              :key="category.id"
              :category="category"
              @showProducts="showProducts"
              @chose="choseCategory"
              />
          </ul>
          <h3><b class='fas fa-angle-down' style='font-size:24px'>Action : </b></h3>
          <div class="action-product">
            <div class="add-product">
              <button class="btn btn-action" @click="addProduct">
                <i class="fas fa-plus" style="font-size:24px"></i>
                <span> Product</span>
              </button>
            </div>
            <div class="add-category mt-2">
            <button class="btn btn-action" @click="addCategory">
              <i class='fas fa-plus' style='font-size:24px'></i>
              <span> Category</span>
            </button>
          </div>
          <div class="delete-category mt-2">
            <button class="btn btn-action" @click="deleteCategory">
              <i class="fa fa-trash-o" style="font-size:24px"></i>
              <span> Del. Category</span>
            </button>
          </div>
        </div><br>
        <div class="space banners-space">
          <h4>
        <h3><b class='fas fa-camera-retro' style='font-size:24px'> Banners :</b></h3>
          </h4>
          <div class="action-banner">
            <div class="view-banner">
              <button class="btn btn-action" @click.prevent="showBanners">
                  <i class='fas fa-eye' style='font-size:24px'></i>
              <span> Banner</span>
              </button>
            </div>
            <div class="add-banner mt-2">
              <button class="btn btn-action" @click="addBanner">
                 <i class='fas fa-plus' style='font-size:24px'></i>
              <span> Banner</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="main-content col-14 mt-2">
        <div class="content-nav">
          <button class="btn" @click="openNav">
            <i class="fa fa-align-justify" style="font-size:24px"></i>
          </button>
          <div class="user-email">{{userEmail}}</div>
          <div class="content-category">{{ chosenCategory.name }}</div>
        </div>
        <div class="content">
          <div class="content-header" v-show="show==='products'" v-if="products">
            <div class="content-header-text col-1">No.</div>
            <div class="content-header-text col-3">Image</div>
            <div class="content-header-text col-2">Name</div>
            <div class="content-header-text col-2">Price</div>
            <div class="content-header-text col-2">Stock</div>
            <div class="content-header-text col-2">Edit/Delete</div>
          </div>
          <div class="empty-message" v-else-if="!products">
            <h1>It's Empty here</h1>
          </div>
          <!--LOOP PRODUK DISINI-->
          <Product
            v-show="show==='products'"
            v-for="(product, i) in products"
            :key="i"
            :product="product"
            :counter="i"
            :categories="categories"
          />
          <div class="content-header" v-show="show==='banners'" v-if="banners">
            <div class="content-header-text col-1">No.</div>
            <div class="content-header-text col-4">Image</div>
            <div class="content-header-text col-2">Title</div>
            <div class="content-header-text col-3">Status</div>
            <div class="content-header-text col-2">Action</div>
          </div>
          <!--LOOP BANNER DISINI-->
          <div>
            <Banner
              v-show="show==='banners'"
              v-for="(banner, x) in banners"
              :key="x"
              :banner="banner"
              :counter="x"
          />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '../components/Product.vue'
import Category from '../components/Category.vue'
import Banner from '../components/Banner.vue'
import Swal from 'sweetalert2'
export default {
  name: 'Main',
  data () {
    return {
      navOpen: false,
      chosenCategory: '',
      show: 'products',
      addCategoryPayload: {
        name: ''
      },
      addBannerPayload: {
        title: '',
        image_url: ''
      },
      addProductPayload: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      },
      categoriesList: '',
      showEditProduct: false
    }
  },
  methods: {
    openNav () {
      if (this.navOpen) {
        this.navOpen = false
      } else {
        this.navOpen = true
      }
    },
    showProducts () {
      this.show = 'products'
    },
    showBanners () {
      this.show = 'banners'
      this.chosenCategory = ''
    },
    choseCategory (payload) {
      this.chosenCategory = payload
    },
    resetCategory (payload) {
      this.chosenCategory = ''
      this.show = 'products'
    },
    addCategory () {
      if (!this.$store.state.loggedIn) {
        Swal.fire('please login first')
      } else {
        Swal.fire({
          title: 'Enter New Category name !',
          input: 'text',
          inputLabel: 'Category name',
          showCancelButton: true,
          inputValidator: (value) => {
            if (!value) {
              return 'You need to write something!'
            }
          }
        })
          .then((result) => {
            if (result.isConfirmed) {
              this.addCategoryPayload.name = result.value
              return this.$store.dispatch('addCategory', this.addCategoryPayload)
            }
          })
          .then(() => {
            this.$store.dispatch('getCategories')
          })
          .catch(err => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.response.data.message + '!'
            })
          })
      }
    },
    deleteCategory () {
      const objCategories = {}
      this.categories.forEach((element) => {
        objCategories[element.id] = element.name
      })
      if (!this.$store.state.loggedIn) {
        Swal.fire('Please login first')
      } else {
        Swal.fire({
          title: 'Select Category !',
          input: 'select',
          inputOptions: objCategories,
          inputPlaceholder: 'Select a category',
          showCancelButton: true,
          inputValidator: (value) => {
            return new Promise((resolve) => {
              if (!value) {
                resolve('You need to select category')
              } else {
                resolve()
              }
            })
          }
        })
          .then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You just deleted one Category',
                showConfirmButton: false,
                timer: 1500
              })
              return this.$store.dispatch('deleteCategory', result.value)
            }
          })
          .then(() => {
            this.$store.dispatch('getCategories')
          })
          .catch(err => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.response.data.message + '!'
            })
          })
      }
    },
    addBanner () {
      if (this.$store.state.loggedIn) {
        Swal.fire({
          title: 'Enter banner title !',
          input: 'text',
          inputLabel: 'Banner title',
          showCancelButton: true,
          inputValidator: (value) => {
            if (!value) {
              return 'You need to write something!'
            }
          }
        })
          .then((result) => {
            this.addBannerPayload.title = result.value
            if (result.isConfirmed) {
              Swal.fire({
                title: 'Enter banner image_url !',
                input: 'text',
                inputLabel: 'Banner image',
                showCancelButton: true,
                inputValidator: (value) => {
                  if (!value) {
                    return 'You need to write something!'
                  }
                }
              })
                .then(result => {
                  if (result) {
                    this.addBannerPayload.image_url = result.value
                  }
                  if (result.isConfirmed) {
                    this.$store.dispatch('addBanner', this.addBannerPayload)
                  }
                })
                .catch((err) => {
                  console.log(err)
                })
            }
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        Swal.fire('Please login first')
      }
    },
    addProduct () {
      if (this.$store.state.loggedIn) {
        const objCategories = {}
        this.categories.forEach((element) => {
          objCategories[element.id] = element.name
        })
        Swal.fire({
          title: 'Product Identity',
          html:
          '<input id="swal-input1" class="swal2-input" placeholder="Image URL">' +
          '<input id="swal-input2" class="swal2-input" placeholder="Product Name">' +
          '<input id="swal-input3" class="swal2-input" placeholder="Product Price">' +
          '<input id="swal-input4" class="swal2-input" type="number" min="0" placeholder="Product Stock">',
          focusConfirm: false,
          preConfirm: () => {
            return [
              document.getElementById('swal-input1').value,
              document.getElementById('swal-input2').value,
              document.getElementById('swal-input3').value,
              document.getElementById('swal-input4').value
            ]
          }
        })
          .then(result => {
            if (result.isConfirmed) {
              this.addProductPayload = {
                name: result.value[1],
                image_url: result.value[0],
                price: result.value[2],
                stock: result.value[3]
              }
              return Swal.fire({
                title: 'Select Category !',
                input: 'select',
                inputOptions: objCategories,
                inputPlaceholder: 'Select a category',
                showCancelButton: true,
                inputValidator: (value) => {
                  return new Promise((resolve) => {
                    if (!value) {
                      resolve('You need to select category')
                    } else {
                      resolve()
                    }
                  })
                }
              })
            }
          })
          .then(result => {
            if (result.isConfirmed) {
              this.addProductPayload.CategoryId = result.value
              return this.$store.dispatch('addProduct', this.addProductPayload)
            }
          })
          .then(() => {
            this.$store.dispatch('getProducts')
          })
          .catch(err => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.response.data.message + '!'
            })
          })
      } else {
        Swal.fire('Please login first')
      }
    }
  },
  components: {
    Product, Category, Banner
  },
  computed: {
    products () {
      if (this.chosenCategory) {
        console.log(this.$store.state.products)
        return this.$store.state.products.filter(
          element => element.CategoryId === this.chosenCategory.id
        )
      } else {
        return this.$store.state.products
      }
    },
    categories () {
      this.$store.dispatch('getCategories')
      return this.$store.state.categories
    },
    userEmail () {
      if (this.$store.state.loggedIn) {
        return localStorage.getItem('user')
      } else {
        return ''
      }
    },
    banners () {
      return this.$store.state.banners
    }
  },
  mounted () {
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getBanners')
    if (localStorage.getItem('token')) {
      this.$store.commit('isLogin', true)
    } else {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.btn {
  background-color: #e58e26;
  text-decoration: none;
  width: 3rem;
  height: 3rem;
  text-align: start;
}

.btn:hover {
  background-color: #f6b93b;
}

.btn-action {
  width: 10rem !important;
  height: 3rem !important;
}

.content {
  display: flex;
  flex-direction: column;
  max-width: 99%;
  color: black
}

.content-category {
  margin-right: 10px;
}

.content-header {
  display: flex;
  background-color: black;
  border-radius: 5px;
  color: white;
}

.content-header-text {
  color: white;
}

.content-nav {
  align-items: center;
  background-color: #f6b93b;
  border-radius: 70px;
  box-shadow: 1px 1px 15px 5px rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.container-fluid {
  transition: all 0.5s ease-in-out;
}

.main-content {
  display: flex;
  flex-direction: column;
  z-index: 10;
  width: 100%;
}

.main-web {
  display: flex;
}

.main-nav {
  background-color: black;
  position: relative;
  box-shadow: 1px 1px 15px 5px rgba(0, 0, 0, 0.65);
  border-radius: 60px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-top: 20px;
  margin-right: 12px;
  margin-left: 10px;
  height: 90%;
}

.main-nav a {
  font-size: 1em;
  font-weight: bold;
  color: #e58e26;
  text-decoration: none;
}

b, strong {
    font-weight: bolder;
    color: #e58e26;
}

.main-nav a:hover {
  color: #f6b93b;
  transition: 300ms;
  }

.main-web {
  height: 100vh;
}

.overflow-auto {
  height: 120px;
  width: 100%;
  font-size: 20px;
  color:#e58e26;
}

.space {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.space ul {
  margin-left: 20px;
  align-items: flex-start;
  text-align: start;
}

.fa {
  color: #2f3640
}

.fas {
  color: #2f3640
}

span {
  color: #2f3640;
}

h3 {
  color: #e58e26;
}

</style>
