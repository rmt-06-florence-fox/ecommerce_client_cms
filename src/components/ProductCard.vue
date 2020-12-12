<template>
  <div class="row col-8 mx-auto">
      <div class="card ml-5 mt-3" style="width: 14rem;">
      <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">name product</h5>
        <p class="card-text">price</p>
        <button class="btn-edit">edit</button>
        <button class="btn-delete">delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .btn-edit {
    width: 70px;
    border-radius: 10px;
    background-color: rgb(231, 226, 226);
    border: 1px solid #e5e5e5;
  }
  .btn-edit:hover {
    transition: 0.24s;
    border-radius: 10px;
    background-color: grey;
  }
  .btn-edit:focus {
    outline: none;
  }

  .btn-delete {
    margin-left: 10px;
    width: 70px;
    border-radius: 10px;
    background-color: rgb(226, 102, 102);
    border: 1px solid #e5e5e5;
  }
  .btn-delete:hover {
    transition: 0.24s;
    border-radius: 10px;
    background-color: rgb(228, 60, 60);
  }
  .btn-delete:focus {
    outline: none;
  }
</style>
