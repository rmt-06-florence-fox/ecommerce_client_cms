<template>
    <div class="columns box has-background-link-light ml-2">
        <div class="level-item">
            <img class="image is-128x128" :src="product.image_url" alt="">
        </div>
    <div class="column ml-4 has-text-centered">
        <div>
            <p class="column is-narrow title">Nama Barang</p>
            <!-- <hr class="has-background-grey-light"> -->
            <p class="subtitle ">{{product.name}}</p>
        </div>
    </div>
    <div class="column has-text-centered">
        <div>
            <p class="column title">Harga</p>
            <!-- <hr class="has-background-grey-light"> -->
            <p class="subtitle">{{product.price}}</p>
        </div>
    </div>
    <div class="column has-text-centered">
        <div>
            <p class="column title">Stock</p>
            <!-- <hr class="has-background-grey-light"> -->
            <p class="subtitle">{{product.stock}}</p>
        </div>
    </div>
    <div class="column has-text-centered">
        <div class="column">
            <!-- <p class="message-header">Action</p> -->
            <!-- <hr class="has-background-grey-light"> -->
            <button class="button is-rounded is-primary is-small mr-1">Edit</button>
            <button class="button is-rounded is-danger is-small">Delete</button>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['product']

}
</script>

<style>

</style>
