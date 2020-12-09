<template>
  <div>
    <section class="table-product container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td><img src="https://i.pinimg.com/564x/e4/08/b1/e408b1b3dd4cba7f31e07ea3e6fd035b.jpg" alt="" class="img-product"></td>
            <td>Al-Qur'an</td>
            <td>Rp1.000.000,00</td>
            <td>10</td>
            <td><button class="btn btn-edit">Edit</button> <button class="btn btn-danger">Delete</button></td>
          </tr>
          <tr>
            <th>2</th>
            <td><img src="https://i.pinimg.com/564x/e4/08/b1/e408b1b3dd4cba7f31e07ea3e6fd035b.jpg" alt="" class="img-product"></td>
            <td>Al-Qur'an</td>
            <td>Rp1.000.000,00</td>
            <td>10</td>
            <td><button class="btn btn-edit">Edit</button> <button class="btn btn-danger">Delete</button></td>
          </tr>
          <tr>
            <th>3</th>
            <td><img src="https://i.pinimg.com/564x/e4/08/b1/e408b1b3dd4cba7f31e07ea3e6fd035b.jpg" alt="" class="img-product"></td>
            <td>Al-Qur'an</td>
            <td>Rp1.000.000,00</td>
            <td>10</td>
            <td><button class="btn btn-edit">Edit</button> <button class="btn btn-danger">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProductTable'
}
</script>

<style>
  .img-product{
    width: 100px;
  }
  .table-product th{
    color: #16a592;
  }
  .btn-edit{
    background-color: #1ee2c8;
  }
</style>
