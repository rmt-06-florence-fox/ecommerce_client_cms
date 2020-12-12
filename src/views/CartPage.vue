<template>
  <div>
      <Navbar/>
      <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">image</th>
            <th scope="col">price</th>
            <th scope="col">action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>image</td>
                <a href="">delete</a>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>image</td>
                <a href="">delete</a>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>image</td>
                <a href="">delete</a>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td></td>
                <td>total price</td>
                <td></td>
                <a href=""></a>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Cart',
  components: {
    Navbar
  }
}
</script>

<style>
    .table {
        margin-top: 100px;
    }
    .table a {
        color: red;
    }
</style>
