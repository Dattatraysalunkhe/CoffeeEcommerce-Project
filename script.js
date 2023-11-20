gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "90px",
    borderRadius:"10px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
  gsap.to("#main",{
    backgroundColor:"#000",
    duration:0.7,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
      //  markers:true,
        start:"top -25%",
        end:"top -70%",
       // start:"top -30%",
       // end:"top -50%",
        scrub:2
    }
  })
  gsap.from("#aboutus img,#aboutusin",{
    y: 50, // from y axis
  opacity: 0, //its use for visibilty
  duration: 1,
  stagger:0.4, //one by one element
  scrollTrigger: {
    trigger: "#aboutus",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 3, //smothness
  },
  })
  gsap.from(".card",{
    scale:0.8,
  opacity: 0,
  duration: 1,
  stagger:0.4,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 100%",
    scrub: 3,
  },
  })
  gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
      trigger:"#colon1",
      scroller:"body",
     // markers:"true",
      start:"top 55%",
      end:"top 45%",
      scrub:4,
    }
  })
  gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
      trigger:"#colon2",
      scroller:"body",
     /* markers:"true",*/
      start:"top 55%",
      end:"top 45%",
      scrub:4,
    }
  })
  