$(window).load(function(){
  // $(".page-loader div").fadeOut();
  $(".page-loader").delay(1000).fadeOut("slow");

})


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:70,
  dots:true,
  autoplay:true,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
}

})
$(".owl-item.active").each(function(){
    $(this).find(".all").addClass("animate__animated")
})

// $('#myModal').modal()
$(function(){
  $(".mytabs li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".mycontent").find($(this).data("target")).addClass("active").siblings().removeClass("active")
  })
})
$(function(){
  $('.carousel').carousel({
    interval: 2000,
    
    })
})

$(function(){
  $(".port-tabs li").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
  })
  	
})

  $('.items').mixItUp();	
// start blinking counter box

  
 
setInterval(function() {
  $('.counter .counter-title').animate({ opacity: 1 }, 600).animate({ opacity: 0.5 }, 600);
}, 2000);

$(function(){
  $(".corner .header-iconic").click(function(){
    $(".corner .main-header .header-nav").slideToggle(1000)
  })
})

$(function(){
  var lastsc = 0,
  seg =3;
  $(window).scroll(function(){
    var sc= $(window).scrollTop();
    if((sc-lastsc) >= seg){
      $(".corner").slideUp()
    } else {
      $(".corner").slideDown()
    }
    lastsc=sc;
  })
})





