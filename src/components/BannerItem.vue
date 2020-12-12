<template>
    <tr>
      <th scope="row">{{ idx+1 }}</th>
      <td class="w-25">
        <img :src="banner.image_url" alt="" class="img-fluid img-thumbnail" />
      </td>
      <td>{{ banner.title }}</td>
      <td>{{ banner.status }}</td>
      <td>
        <a class="btn btn-2 text-white" @click="toEditBannerPage(banner.id)">Edit</a
        ><a class="btn btn-3 ml-2 text-white" @click="deleteBanner(banner.id)">Delete</a>
      </td>
    </tr>
</template>

<script>
export default {
  name: 'BannerItem',
  props: ['banner', 'idx'],
  methods: {
    toEditBannerPage (id) {
      this.$router.push('/editBanner/' + id)
    },
    deleteBanner (id) {
      this.$store.dispatch('deleteBanner', id)
    }
  }
}
</script>

<style></style>
