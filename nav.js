const navslide = () => {
  const burger = document.querySelector(".burger")
  const nav = document.querySelector(".nav-links")
  const navLinks = document.querySelectorAll(".nav-links li")

  burger.addEventListener("click" , () => {

      // toggle animation
      nav.classList.toggle("nav-active")

      // animate links
      navLinks.forEach((link , index) =>{
          if(link.style.animation) {
              link.style.animation = ""
          }else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index/ 7 + .4}s`
          }
      })

      // burger animation
      burger.classList.toggle("toggle")
  })
}

navslide()



// reducing  nav height when scrolling

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "20px";
//   } else {
//     document.getElementById("navbar").style.padding = "80px";
//   }
// }


var $owl = $('.owl-carousel');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
  center: true,
  loop: true,
  responsive : {
    // breakpoint from 0 up
    0 : {
      stagePadding: 20,
      loop: true,
      responsiveClass: true,
      dots: false,
      nav: true,
      autoHeight: true,
      items: 1
    },
    // breakpoint from 768 up
    768 : {
      items: 5
    }
  }
});
// jQuery('.owl-carousel').owlCarousel({
//   // Here goes default configs
//   responsive : {
//     // breakpoint from 0 up
//     0 : {
//       stagePadding: 0,
//       loop: false,
//       responsiveClass: true,
//       dots: false,
//       nav: true,
//       autoHeight: true,
//       items: 1
//     },
//     // breakpoint from 768 up
//     768 : {
//       items: 5
//     }
//   }
// });
$(document).on('click', '.owl-item>div', function() {
  // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
  var $speed = 300;  // in ms
  $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
});

