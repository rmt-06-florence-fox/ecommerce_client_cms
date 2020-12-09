<template>
  <div class="product">
    <h1>ini halaman product</h1>
    <div class="container">
      <div class="row">
        <div data-v-67078f34="" class="col-12">
          <table data-v-67078f34="" class="table table-image">
            <thead data-v-67078f34="">
              <tr data-v-67078f34="">
                <th
                  data-v-67078f34=""
                  scope="col"
                  style="text-align: center; font-size: 20px"
                >
                  No
                </th>
                <th
                  data-v-67078f34=""
                  scope="col"
                  style="text-align: center; font-size: 20px"
                >
                  Image
                </th>
                <th
                  data-v-67078f34=""
                  scope="col"
                  style="text-align: center; font-size: 20px"
                >
                  Name
                </th>
                <th
                  data-v-67078f34=""
                  scope="col"
                  style="text-align: center; font-size: 20px"
                >
                  Category
                </th>
                <th
                  data-v-67078f34=""
                  scope="col"
                  style="text-align: center; font-size: 20px"
                >
                  Price
                </th>
                <th
                  data-v-67078f34=""
                  scope="col"
                  style="text-align: center; font-size: 20px"
                >
                  Stock
                </th>
                <th
                  data-v-67078f34=""
                  scope="col"
                  style="text-align: center; font-size: 20px"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody data-v-67078f34="">
              <tr data-v-7a0b8f82="" data-v-67078f34="">
                <th data-v-7a0b8f82="" scope="row">1</th>
                <td data-v-7a0b8f82="" class="w-25">
                  <img
                    data-v-7a0b8f82=""
                    src="https://s1.bukalapak.com/uploads/content_attachment/153bd5d120e8d762faefe2c5/w-744/5_Cara_Membersihkan_Alat_Masak_Anti_Lengket_yang_Berbeda_dengan_Alat_Masak_Lain_3.jpg"
                    alt="Products Photo"
                    class="img-fluid img-thumbnail"
                  />
                </td>
                <td data-v-7a0b8f82="">Panci</td>
                <td data-v-7a0b8f82="">makanan</td>
                <td data-v-7a0b8f82="">10000</td>
                <td data-v-7a0b8f82="">3</td>
                <td data-v-7a0b8f82="">
                  <a data-v-7a0b8f82="" class="btn btn-2 text-white">Edit</a
                  ><a data-v-7a0b8f82="" class="btn btn-3 ml-2 text-white">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
          <ProducList></ProducList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../config/axiosinstance.js'
import ProducList from '../components/ProductList.vue'

export default {
  name: 'Product',
  products: [],
  components: {
    ProducList
  },
  methods: {
    fetchProductList () {
      axios
        .get('/products')
        .then(data => {
          this.products = data
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>
.btn {
  color: white;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.btn-2 {
  background-color: blue;
}

.btn-3 {
  background-color: red;
}

</style>
