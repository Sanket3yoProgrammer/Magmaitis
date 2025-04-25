gsap.registerPlugin(ScrollTrigger);


gsap.fromTo("#view-all", {
  opacity: 0,
  y: 160
}, {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: "#page11",
    scroller: "#main",
    start: "100% 120%",
    end: "100% 70%",
    scrub: 0.5,
    // markers: true
    once: true,
  }
})

gsap.fromTo(".book-a-demo2", {
  opacity: 0,
  y: 100
}, {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".book-a-demo2",
    scroller: "#main",
    start: "top bottom",
    end: "top 70%",
    scrub: 0.5,
    // markers: true,
    once: true,
  }
})



function animateHeading_page12() {
    const heading = document.querySelector(".animateHeading_page12");
    const text = heading.textContent;
    heading.innerHTML = "";
  
    const letters = text.split("");
    const spans = [];
  
    // Create spans with increasing Y and initial rotation
    letters.forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      span.style.transform = `translateY(${120 - i * 2}px) rotate(20deg)`; // Start lower for wave
      heading.appendChild(span);
      spans.push(span);
    });
  
    // Animate letters up with delay for wave effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animateHeading_page12",
        scroller: "#main", // Adjust this if needed
        start: "top 80%",
        end: "top 50%",
        scrub: 0.5,
        // markers: true,
        once: true,
      },
    });
  
    spans.forEach((span, i) => {
      tl.to(span, {
        y: 0,
        rotate: 0,
        ease: "power2.out",
      }, i * 0.05); // Small delay for wave
    });
  }
  
  animateHeading_page12();
  
  
  gsap.fromTo(".page12-inner>p", {
    opacity: 0,
    y: 160
  }, {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".page12-inner",
      scroller: "#main",
      start: "top 60%",
      end: "top 20%",
      scrub: 0.8,
    //   markers: true
      once: true,
    }
  })
  
  
  
  
  
  
  
  
  
  