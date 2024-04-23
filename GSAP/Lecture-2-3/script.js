const tl = gsap.timeline();

tl.from(".txt-4", {
  onStart: function () {
    $(".txt-4").textillate({
      in: {
        effect: "fadeInUp",
        callback: function () {
          $(".txt-4").textillate("out");
        },
      },
      out: { effect: "fadeOutUp" },
    });
  },
})
  .from(".txt-3", {
    opacity: 0,
    delay: 1,
    onStart: function () {
      $(".txt-3").textillate({
        in: {
          effect: "fadeInUp",
          callback: function () {
            $(".txt-3").textillate("out");
          },
        },
        out: { effect: "fadeOutUp" },
      });
    },
  })
  .from(".txt-2", {
    opacity: 0,
    delay: 1,
    onStart: function () {
      $(".txt-2").textillate({
        in: {
          effect: "fadeInUp",
          callback: function () {
            $(".txt-2").textillate("out");
          },
        },
        out: { effect: "fadeOutUp" },
      });
    },
  })
  .from(".txt-1", {
    opacity: 0,
    delay: 1,
    onStart: function () {
      $(".txt-1").textillate({
        in: {
          effect: "fadeInUp",
        },
      });
    },
  })
  .to(".cover", {
    top: "-100%",
    delay: 1,
    duration: 1.2,
    ease: "Power-4.easeOut",
    // onanimationend: pageScroller,
  })
  .to('.page-1', {
    scrollTrigger:{
        trigger: '.page-1',
        scroller: 'body',
        markers: true,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true, // Can also use in value 1 to 5 which defines for smoothness
        // pin: true,
        // pinSpacing: true
    },
    scroll: 360,
    duration: 2
})


console.log('linked');
  // .to('.cover', {
  //   onanimationend: pageScroller(),
  // });

// function pageScroller() {
//   const pageScrollerElem = document.querySelector(".page-scoll-active");
//   pageScrollerElem.classList.remove("page-scroll");
// }
