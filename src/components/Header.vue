<template>
  <div>
      <div class="custom-header baris-head">
          <div class="lest-header mt-2">
                <div class="layanan-cs">
                    <p>Customer Service: +6283120094008</p>
                </div>
          </div>
          <div>
                <div class="right-header mt-1 mb-2">
                    <a href="">Bantuan</a>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.baris-head {
    display: flex;
    justify-content: space-between;
    background-color: #eb3b5a;
}
.layanan-cs p{
    font-size: 11px;
    margin-bottom: 3px;
    margin-top: 0px;
    margin-left: 22px;
    color:white
}
.right-header {
    font-size: 13px;
    margin-bottom: 3px;
    margin-top: 0px;
    list-style: none;
}
.right-header a {
    list-style: none;
    text-decoration: none;
    color:white;
    margin-right: 23px;
}
</style>
