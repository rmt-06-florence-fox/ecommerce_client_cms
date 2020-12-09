<template>
  <div class="col-3">
                <div class="card">
                    <!-- <img :src="product.image_url" alt="standard" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                    </div> -->
                    <img src="https://media.guitarcenter.com/is/image/MMGS7/Les-Paul-Standard-60s-Electric-Guitar-Unburst/L54578000003000-00-290x290.jpg" alt="standard" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Standard</h5>
                    </div>
                    <div class="btn btn-info">Detail</div>
                </div>
            </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object
  }
}
</script>

<style>

</style>
