<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="Azka">
	<meta name="author" content="Azis">
	<meta name="keywords" content="Azis, Azka, bootstrap, yuzzu, kamiyaka, bootstrap 5, admin, dashboard, template, responsive, css, sass, html, theme, front-end, ui kit, web">

	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link rel="shortcut icon" href="img/icons/icon-48x48.png" />

	<link rel="canonical" href="https://demo-basic.adminkit.io/" />

	<title>Kelas 8B</title>
	
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

	<link href="css/app.css" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap" rel="stylesheet">
	<script src="https://cdn.rawgit.com/bungfrangki/efeksalju/2a7805c7/efek-salju.js" type="text/javascript"> </script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> 
    </script> 


  <style>html, body {
    font-family: 'Rubik', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  background-color: #ffffff;
  height: 100%;
  -webkit-font-smoothing: antialiased; }

body {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; }

.message {
  text-align: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
  max-width: 450px; }

.message__title {
  font-size: 22px;
  font-weight: 100;
  margin-top: 15px;
  color: #FFFFFF;
  margin-bottom: 8px; }

p {
  -webkit-margin-after: 0px;
  -webkit-margin-before: 0px;
  font-size: 15px;
  color: #FFFFFF;
  line-height: 21px;
  margin-bottom: 4px; }

.btn {
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 14px;
  color: #FFFFFF;
  border: 1px solid #8B008B; }

.hk-logo, .app-icon {
  fill: #FFFFFF; }

.info {
  fill: #FFFFFF; }

body.friendly {
  background-image: url("./asu.jpg");
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-attachment: fixed;
  height: 100%;

}
body.friendly .message__title {
  color: #FFFFFF; }

body.friendly p {
  color: rgba(255, 255, 255, 0.6); }

body.friendly .hk-logo, body.friendly .app-icon {
  fill: rgba(255, 255, 255, 0.9); }

body.friendly .info {
  fill: rgba(255, 255, 255, 0.9); }

body.friendly .btn {
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.9); }

.info_area {
  position: fixed;
  right: 12px;
  bottom: 12px; }

.logo {
  position: absolute;
  bottom: 20px;
}
hr {
  border-radius: 5px;
  color: white;
  
}
.anu {
    color: white;
    opacity: 0.6;
}
nav {
    position: absolute;
    bottom: 300px;
}
</style> 
  <base target="_parent"> 
 </head> 
 <body class="friendly"> 
  <div class="mb-0">
<h5 style="color:white"><span
style="color:green"
     class="txt-rotate"
     data-period="4000"
     data-rotate='[ WEB BUCIN ]'></span>
      </h5>
      <hr size="5">
</div>
<h5 style="color:white" data-aos="fade-up">
    Pindah <a class="anu" href="https://yuzzu-api.herokuapp.com">Kesini.</a>

    <div class="logo">
<a style="color:white"href="https://wa.me/6281337541779">
<i class="fa fa-whatsapp"></i> WhatsApp
</a>
    </div>
    <script>
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 150 - Math.random() * 50;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 30;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

    </script>
 </body>
</html>
