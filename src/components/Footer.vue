<template>
  <div>
      <div id="footer-custom">
            <div class="mt-5">
                <hr>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gutter-4 center-footer">
                    <div class="col col-lg-3 footer-left row">
                        <div class="">
                            <h3> INFORMATION </h3>
                        </div>
                        <ul>
                            <li>Kebijakan Privasi</li>
                            <li>Syarat & Ketentuan</li>
                            <li>Konfirmasi Pembayaran</li>
                        </ul>
                    </div>
                    <div class="col footer-center row">
                        <h3>FOLLOW US</h3>
                        <ul>
                            <li>Alamat: Bandung, Indonesia</li>
                            <li>Nomor Kontak: +6283120094008</li>
                            <li>Email: cs.bukapalak@mail.com</li>
                        </ul>
                    </div>
                    <div class="col col-lg-3 footer-right">
                        <h3>METODE PEMBAYARAN</h3>
                        <div class="collectionPNG row">
                            <div class="row">
                            <ul>
                                <li class="mt-2">
                                <img src="https://ik.imagekit.io/powerbiz/utils/gopay.png?tr=h-30" alt="GoPay" width="100px">
                                </li>
                                <li class="mt-3">
                                    <img src="https://www.banksinarmas.com/id/public/revamp/logoj.png;wa005ee3af0db84daa" alt="dana" width="110px">
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                Copyright &copy; 2020
                Designed by Febrian Aditya S.Pd
            </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>

h3 {
    font-size: 20px;
}
.center-footer {
    display: flex;
    justify-content: center;
    font-size: 13px;
}
.footer-left li {
    list-style-type: none;
    text-decoration: none;
}
.footer-center li {
    list-style-type: none;
    text-decoration: none;
}
.footer-right li {
    list-style-type: none;
    text-decoration: none;
}
.collectionPNG {
    display: flex;
}
.footer{
    height:30px;
    line-height:30px;
    background:#eb3b5a;
    color:#fff;
    bottom:0px;
    width:100%
}
.top-footer {
    min-height: 100%;
    line-height:50px;
    position:absolute;
    width:100%
}
#footer-custom {
    margin-top: 0%;
    position: initial;
    bottom: 0%;
    left: 0px;
    width: 100%;
    height: 8%;
    padding: 8px 0px;
}
</style>
