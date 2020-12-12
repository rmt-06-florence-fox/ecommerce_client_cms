<template>
  <div class="row">
    <div class="col-md-4 d-flex flex-column justify-content-center">
      <b-modal :id="getModalId" hide-footer title="Edit Banner">
        <BannerEdit :banner="banner"/>
      </b-modal>
      <div class="">
          <b-nav class="h1 d-flex justify-content-center">
            <b-nav-item>
              <b-icon classs="m-3" icon="trash-fill" aria-hidden="true" @click="deleteBanner" class="text-danger"></b-icon>
            </b-nav-item>
            <b-nav-item>
              <b-icon classs="" icon="pen-fill" aria-hidden="true" v-b-modal="getModalId" class="text-success"></b-icon>
            </b-nav-item>
          </b-nav>
          <h1 class="text-center">{{banner.title}}</h1>
      </div>
    </div>

    <img :src="banner.imageUrl" alt="banner image" class="col-md-8">
  </div>
</template>

<script>
import BannerEdit from './BannerEdit.vue'
export default {
  name: 'BannerCard',
  components: {
    BannerEdit
  },
  props: ['banner'],
  methods: {
    deleteBanner () {
      this.$store.dispatch('deleteBanner', this.banner.id)
    }
  },
  computed: {
    getModalId () {
      return 'banner-' + this.banner.id
    }
  }
}
</script>

<style>

</style>
