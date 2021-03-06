$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 200){
            $('.navbarCustom').addClass("sticky");
        }else{
            $('.navbarCustom').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbarCustom .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbarCustom .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "Software Developer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Software Developer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    var dob = new Date("10/23/2000");
var month_diff = Date.now() - dob.getTime();
var age_dt = new Date(month_diff);   
var year = age_dt.getUTCFullYear();
var age = Math.abs(year - 1970);
document.getElementById('myAge').innerHTML=age;


function redirect() {
    window.open("https://github.com/guthaVamshi/codeSmashers", "_blank");
    modal.style.display = "none";
  }
  function redirect2() {
    window.open("https://github.com/guthaVamshi/AMkart", "_blank");
    modal2.style.display = "none";
  }
  var modal = document.getElementById("myModal");
  var modal2 = document.getElementById("myModal2");
  var nothanks = document.getElementById("nothanks");
  var nothanks2 = document.getElementById("nothanks2");
  var btn = document.getElementById("myBtn");
  var btn2 = document.getElementById("myBtn2");
  btn.onclick = function () {
    modal.style.display = "block";
  };
  nothanks.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  };
  btn2.onclick = function () {
    modal2.style.display = "block";
  };
  nothanks2.onclick = function () {
    modal2.style.display = "none";
  };
});