<template>
  <div class="home">
    <div class="main-web">
      <div v-if="navOpen" class="main-nav col-1.5">
        <h3><a href="#" class="fa fa-area-chart" style='font-size:24px'> Dashboard</a></h3>
          <h3><b class='fas fa-building' style='font-size:24px'> Categories : </b></h3>
          <ul class="overflow-auto">
            <h4>elektronik</h4>
          </ul>
          <h3><b class='fas fa-angle-down' style='font-size:24px'>Action : </b></h3>
          <div class="action-product">
            <div class="add-product">
              <button class="btn btn-action">
                <i class="fas fa-plus" style="font-size:24px"></i>
                <span> Product</span>
              </button>
            </div>
            <div class="add-category mt-2">
            <button class="btn btn-action">
              <i class='fas fa-plus' style='font-size:24px'></i>
              <span> Category</span>
            </button>
          </div>
          <div class="delete-category mt-2">
            <button class="btn btn-action" >
              <i class="fa fa-trash-o" style="font-size:24px"></i>
              <span> Category</span>
            </button>
          </div>
        </div><br>
        <div class="space banners-space">
          <h4>
        <h3><b class='fas fa-camera-retro' style='font-size:24px'> Banners :</b></h3>
          </h4>
          <div class="action-banner">
            <div class="view-banner">
              <button class="btn btn-action" >
                  <i class='fas fa-eye' style='font-size:24px'></i>
              <span> Banner</span>
              </button>
            </div>
            <div class="add-banner mt-2">
              <button class="btn btn-action">
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
          <div class="user-email">USER EMAIL</div>
          <div class="content-category">NAMA CATEGORY</div>
        </div>
        <div class="content">
          <div class="content-header">
            <div class="content-header-text col-1">No.</div>
            <div class="content-header-text col-3">Image</div>
            <div class="content-header-text col-2">Name</div>
            <div class="content-header-text col-2">Price</div>
            <div class="content-header-text col-2">Stock</div>
            <div class="content-header-text col-2">Action</div>
          </div>
          <div class="empty-message">
            <h1>It's Empty here</h1>
          </div>
          <!--LOOP PRODUK DISINI-->
          <div>
            PRODUK
          </div>
          <div class="content-header">
            <div class="content-header-text col-1">No.</div>
            <div class="content-header-text col-5">Image</div>
            <div class="content-header-text col-3">Title</div>
            <div class="content-header-text col-1">Status</div>
            <div class="content-header-text col-2">Action</div>
          </div>
          <!--LOOP BANNER DISINI-->
          <div>
            BANNER
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      navOpen: false
    }
  },
  methods: {
    openNav () {
      if (this.navOpen) {
        this.navOpen = false
      } else {
        this.navOpen = true
      }
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
  color: white
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
  background-color: #e58e26;
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
  background-color: #2f3640;
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
  color: black;
  text-decoration: none;
}

b, strong {
    font-weight: bolder;
    color: black;
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
  color:white;
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
  color: black
}

.fas {
  color: black
}

span {
  color:black;
}

h3 {
  color: black;
}

</style>
