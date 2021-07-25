<template>
<div>
  <BannerList></BannerList>
</div>
</template>

<script>
import BannerList from '../components/BannerList.vue'

export default {
  name: 'Banner',
  components: {
    BannerList
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
