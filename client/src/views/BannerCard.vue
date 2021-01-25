<template>
<div>
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="banners.image_url" alt="banner_pict">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">name : {{banners.title}}</h5>
        <p class="card-text">status: {{banners.status}}</p>
        <p class="card-text"><small class="text-muted"></small></p>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'BannerCard',
  props: ['banners']
}
</script>

<style>

</style>
