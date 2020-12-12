<template>
  <div class="product">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <table class="table table-image ml-2">
            <thead>
              <tr>
                <th
                  scope="col"
                  style="text-align: center; font-size: 20px"
                >
                  No
                </th>
                <th
                  scope="col"
                  style="text-align: center; font-size: 20px"
                >
                  Title
                </th>
                <th
                  scope="col"
                  style="text-align: center; font-size: 20px"
                >
                  Status
                </th>
                <th
                  scope="col"
                  style="text-align: center; font-size: 20px"
                >
                  Image
                </th>
                <th
                  scope="col"
                  style="text-align: center; font-size: 20px"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <BannerItem
                v-for="(banner, idx) in banners" :key="idx"
                :banner="banner"
                :idx="idx"
              ></BannerItem>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerItem from './BannerItem'

export default {
  name: 'BannerList',
  components: {
    BannerItem
  },
  computed: {
    banners () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchBannerList () {
      this.$store.dispatch('fetchBannerList')
    }
  },
  created () {
    this.fetchBannerList()
  }

}
</script>

<style>

</style>
