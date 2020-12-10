<template>
  <div>
    <div class="banner">
      <div class="col-1">
        <div class="banner-property banner-num">
          {{ no }}
        </div>
      </div>
      <div class="col-3">
        <div class="banner-property banner-image">
          <img id="banner-image" width="200px" :src="banner.image_url" />
        </div>
      </div>
      <div class="col-2">
        <div class="banner-property banner-name">{{ banner.title }}</div>
      </div>
      <div class="col-2">
        <div class="banner-property banner-status" id="banner-status">
          <a
            href="#">
            keaktifan banner / ga aktif
          </a>
        </div>
      </div>
      <div class="col-2">
        <button class="btn">
            logo delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
    }
  },
  methods: {
  },
  props: ['banner', 'counter'],
  computed: {
    no () {
      return this.counter + 1
    }
  }

}
</script>

<style scoped>
#banner-image {
  border-radius: 40px;
  width: 100%;
  height: auto;
}
.icon:hover {
  color: black;
  transition: 300ms;
}

a {
  color: black;
  text-decoration: none;
}
a:hover {
  color: black;
  transition: 300ms;
}

.fa {
  color: black
}

.fa:hover {
  color: #ff793f;
}

.far:hover {
  color: #ff793f;
}

.banner {
  align-items: center;
  background-color: #2f3640;
  display: flex;
  border-radius: 30px;
  font-size: 2em;
  justify-content: space-between;
  margin: 3px;
  padding: 10px;
  width: 99%;
}
.banner-property {
  font-size: 20px !important;
  color: white;
}

.fas:hover {
  color: #ff793f;
}
</style>
