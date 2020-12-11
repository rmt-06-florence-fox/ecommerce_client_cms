<template>
  <div class="columns">
  <div class="column is-narrow">
    <div class="box" style="width: 200px; height: 130px">
      <img :src= "image" alt="">
    </div>
  </div>
  <div class="column">
    <div class="box p-5" style="height: 130px">
      <div class="columns">
        <div class="column is-8">
          <p class="title is-4 pb-1">{{list.name}}</p>
          <ol class="subtitle" style="list-style-type: none">
            <li class="is-size-6">Price : {{priceRp}}</li>
            <li class="is-size-6">Stock(s) : {{list.stock}}</li>
          </ol>
        </div>
        <div class="column is-flex is-align-items-center is-justify-content-center">
          <p class="buttons">
            <button class="button is-large">
              <span class="icon is-large">
                <i class="fas fa-edit"></i>
              </span>
            </button>
            <button class="button is-large">
              <span class="icon is-large">
                <i class="fas fa-trash-alt"></i>
              </span>
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ListProducts',
  data () {
    return {
      image: `${this.list.image_url}`.replace(/'/g, '')
    }
  },
  props: ['list'],
  computed: {
    priceRp: function () {
      let rupiah = ''
      const priceReverse = this.list.price.toString().split('').reverse().join('')
      for (let i = 0; i < priceReverse.length; i++) if (i % 3 === 0) rupiah += priceReverse.substr(i, 3) + '.'
      return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('')
    }
  }
}
</script>

<style>

</style>
