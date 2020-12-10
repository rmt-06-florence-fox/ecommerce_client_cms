<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" style="box-shadow: 0px 0px 10px;">
        <div class="container-fluid">
            <a class="navbar-brand" href="">Welcome, <i class='fas fa-user-tie'></i> Babang Cemonks | <b><i class="fab fa-cuttlefish"></i>emSky Administrator</b></a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="d-flex ms-auto">
                    sign out
                </form>
            </div>
            <div class="icon ms-2 mt-2">
                <h4>
                    <i class="fas fa-sign-out-alt" id="logout" style="font-size: 40px"></i>
                </h4>
            </div>
        </div>
    </nav>
    <div class="row no-gutters" style="margin-top: 3%">
        <div class="col-md-2 bg-light" style="height: 200vh;">
            <ul class="nav flex-column mt-4" style="text-align: left; margin-left: 7%">
                <li class="nav-item">
                    <a class="nav-link text-dark" href=""><i class="fas fa-tachometer-alt me-2"></i> Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href=""><i class="fas fa-ad me-2"></i> Product</a>
                </li>
            </ul>
        </div>
        <div class="col-md-10 container-fluid" style="box-shadow: 0px 0px 10px;">
            <h3>
                <i class="fas fa-tachometer-alt pt-4"></i> Dashboard <hr>
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
export default {
  name: 'Navbar'
}
</script>

<style>
#logout:hover {
    background-color: #f5054dc4;
    padding-right: 15%;
    padding-left: 15%;
    border-radius: 10%;
}
.nav-link:hover {
    background-color: rgb(108, 204, 236);
    border-radius: 15px;
}
</style>
