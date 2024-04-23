gsap.from("#img1", {
  opacity: 0,
  delay: 0.4,
  duration: 1,
  y: 60,
});
gsap.from("#img2", {
  opacity: 0,
  duration: 1,
  x: 60,
});
gsap.from("#img3", {
  opacity: 0,
  duration: 1,
  y: -60,
});

gsap.from("#page-2 h5, #page-2 h1, #page-2 #about-us", {
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#page-2 h5",
    scroller: "body",
    // markers: true,
    start: "top 60%",
  },
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
