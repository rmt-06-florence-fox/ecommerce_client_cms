<template>
  <section>
    <div class="row no-gutters" style="margin-top: 3%">
      <navVertical />
      <div class="col-md-10 container-fluid" style="box-shadow: 0px 0px 10px;">
          <h3>
              <i class="fas fa-tachometer-alt pt-4 mt-3"></i> Dashboard <hr>
          </h3>
          <div class="row text-white">
              <div class="card bg-info" style="width: 18rem; margin-left: 1%">
                  <div class="card-body">
                      <div class="card-body-icon" style="position: absolute; z-index: 0; top: -22px; right: 4px; opacity: 0.3; font-size: 90px">
                          <i class="fas fa-ad me-2"></i>
                      </div>
                      <h5 class="card-title">Total Product</h5>
                      <div class="display-4">2000</div>
                      <a class="btn btn-outline-light"><p class="card-text"> <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Go Detail <i class="fas fa-angle-double-right"></i></p></a>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import navVertical from './navVertical'

export default {
  name: 'Dashboard',
  components: {
    navVertical
  }
}
</script>

<style>

</style>
