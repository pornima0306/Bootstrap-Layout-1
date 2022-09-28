$('.carousel').carousel({   //copy from bootstrap coresol 
    interval: 2000,
    pause :false     //by default pause :hover
  })



  /* about us page carousel */
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
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
    },
    navText :['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>']
})