<template>
  <section>
    <div class="container" id="login form">
        <form id="form-login">
            <b><i class="fab fa-cuttlefish"></i>emSky Administrator</b><p></p>
            <div class="form-group text-start">
                <small class="form-text text-muted">Email Address</small>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1"><i class="fas fa-user-tie"></i></span>
                  <input type="email" class="form-control form-control-sm text-center" id="form-log-email" >
                </div>
            </div>
            <div class="form-group text-start">
                <small class="form-text text-muted">Password</small>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1"><i class="fas fa-unlock-alt"></i></span>
                  <input type="password" class="form-control form-control-sm text-center" id="form-log-password" >
                </div>
            </div>
            <div class="form-group mt-2">
                <p id="bt">
                  <button type="submit" class="btn btn-outline-primary btn-sm p2" id="btn-signIn"><i class="fa fa-sign-in" aria-hidden="true"></i> sign in</button>
                  <button type="submit" class="btn btn-outline-warning btn-sm p2" id="btn-signIn"><i class="fa fa-sign-in" aria-hidden="true"></i> reset</button>
                </p>
            </div>
        </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>
.container {
  width: 20%;
  margin-top: 16%;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding-bottom: 7px;
  padding-top: 20px;
  padding-right: 2%;
  padding-left: 2%;
}
button {
  width: 48.7%;
}
#bt {
  display: flex;
  justify-content: space-between;
}
</style>
